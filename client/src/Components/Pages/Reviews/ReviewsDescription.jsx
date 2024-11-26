import { t } from 'i18next';
import React from 'react';
import MainImg from '../../../assets/Reviews/main.jpeg';
import './ReviewsDescription.scss';

const ReviewsDescription = () => {
  return (
    <div className="reviews-descriotion-main">
      <div className="reviews-description-img-container">

          <img className="video-background" src={MainImg}/>

      </div>
      <div className="reviews-description-text">
        <div className="reviews-description-title">
          <h1>{t('Reviews.reviews')}</h1>
          <h2>{t('Reviews.miniTitle')}</h2>
        </div>
        <div className="reviews-description-description">
          <p>{t('Reviews.description1')}</p>
          <p>{t('Reviews.description2')}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsDescription;
