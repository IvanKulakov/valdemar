import React from 'react';
import { ReactComponent as Person } from '../../assets/svg/person.svg';
import './MiniReviews.scss';
import { IoIosStar } from 'react-icons/io';

const MiniReviews = ({ name, description, countStar }) => {
  return (
    <div className="mini-reviews-main">
      <div className="mini-reviews-img">
        <Person />
      </div>
      <div className="mini-reviews-name">{name}</div>
      <div className="mini-reviews-description">{description}</div>
    </div>
  );
};

export default MiniReviews;
