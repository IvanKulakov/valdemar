import React from 'react';
import './ShortServicesMini.scss';
import { ReactComponent as Description } from '../../../assets/shortServices/description.svg';

const ShortServicesMini = ({ img, title, description }) => {
  return (
    <div className="short-services-mini-container">

        <img className="short-services-mini-video" src={img} type="img" />
      <div className="short-services-mini-text">
        <h3 className="short-services-mini-title">{title}</h3>
        <p className="short-services-mini-description">
          {description} <Description />
        </p>
      </div>
    </div>
  );
};

export default ShortServicesMini;
