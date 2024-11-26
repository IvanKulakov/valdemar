import React, { useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './ListServices.scss';
import MiniServices from './MiniServices';
import { listServices } from '../../../assets/ListServices/listServices';
import { ReactComponent as ArrowLeft } from '../../../assets/svg/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../../assets/svg/ArrowRight.svg';

const ListServices = () => {
  const itemsPerPage = 5;
  const containerRef = useRef(null);

  const totalPages = Math.ceil(listServices.length / itemsPerPage);

  // Отримання поточної сторінки з URL
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const pageFromPath = parseInt(pathParts[pathParts.length - 1], 10);
  const currentPage =
    isNaN(pageFromPath) || pageFromPath < 1 || pageFromPath > totalPages
      ? 1
      : pageFromPath;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = listServices.slice(startIndex, endIndex);

  // Функція для перемотування до початку списку
  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handlePageClick = (page) => {
    // Перемотування до початку списку при зміні сторінки
    scrollToTop();
  };

  const renderPagination = () => {
    const pageLinks = [];

    // Previous page
    pageLinks.push(
      <li style={{ backgroundColor: 'unset' }} key="prev" className="previous">
        <NavLink
          style={{ backgroundColor: 'unset' }}
          to={currentPage === 1 ? '/' : `/services/${currentPage - 1}`}
          aria-label="Previous page"
          className={currentPage === 1 ? 'disabled' : ''}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          <ArrowLeft />
        </NavLink>
      </li>
    );

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      pageLinks.push(
        <li key={i} className={currentPage === i ? 'active' : ''}>
          <NavLink
            style={{ color: currentPage == i ? '#000000' : '#a9a7a7' }}
            to={i === 1 ? '/services' : `/services/${i}`}
            aria-label={`Page ${i}`}
            aria-current={currentPage === i ? 'page' : undefined}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </NavLink>
        </li>
      );
    }

    // Next page
    pageLinks.push(
      <li key="next" style={{ backgroundColor: 'unset' }} className="next">
        <NavLink
          style={{ backgroundColor: 'unset' }}
          to={currentPage === totalPages ? '#' : `/services/${currentPage + 1}`}
          aria-label="Next page"
          className={currentPage === totalPages ? 'disabled' : ''}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          <ArrowRight />
        </NavLink>
      </li>
    );

    return pageLinks;
  };

  return (
    <div className="list-services-container" ref={containerRef}>
      <div className="list-services">
        {currentItems.map((service) => (
          <MiniServices key={service.id} services={service} />
        ))}
      </div>

      <ul className="pagination" role="navigation" aria-label="Pagination">
        {renderPagination()}
      </ul>
    </div>
  );
};

export default ListServices;
