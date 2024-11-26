import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './ListReviews.scss';
import MiniReviews from '../../utilsComponents/MiniReviews';
import ReactPaginate from 'react-paginate';
import { ReactComponent as ArrowLeft } from '../../../assets/svg/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../../assets/svg/ArrowRight.svg';

const ListReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

  const itemsPerPage = 8; // Кількість відгуків на сторінку

  // Обробка зміни сторінки
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: 'smooth', // Додає плавний перехід
        block: 'start', // Вирівнювання до верхньої частини контейнера
      });
    }
  };

  // Завантаження відгуків
  const fetchReviews = async (page) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}reviews`,
        {
          params: { page: page + 1, limit: itemsPerPage }, // Відправляємо номер сторінки + 1
        }
      );

      setReviews(response.data.items);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      setError('Не вдалося завантажити відгуки');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews(currentPage);
  }, [currentPage]);

  return (
    <div className="list-reviews-container" ref={containerRef}>
      <div className="list-reviews">
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          reviews.map((review) => (
            <MiniReviews
              key={review.id}
              name={review.name}
              description={review.description}
              countStar={5}
            />
          ))
        )}
      </div>

      <ReactPaginate
        previousLabel={<ArrowLeft />}
        nextLabel={<ArrowRight />}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default ListReviews;
