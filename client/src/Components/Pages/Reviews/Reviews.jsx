import React from 'react';
import ReviewsDescription from './ReviewsDescription';
import ListReviews from './ListReviews';
import FormReviews from './FormReviews';
import { useTranslation } from 'react-i18next';
import ArrowButton from '../../utilsComponents/ArrowButton';

const Reviews = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ReviewsDescription />
      <ListReviews />
      <FormReviews />
      <br />
      <ArrowButton />
    </div>
  );
};

export default Reviews;
