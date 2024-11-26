import React from 'react';
import './ServicesDescription.scss';
import Img from '../../../assets/services/Services1.png';
import { ReactComponent as Line } from '../../../assets/svg/line.svg';
import { t } from 'i18next';

const ServicesDescription = () => {
  return (
    <div className="services-main">
      <div className="services-text">
        <Line />
        <h1>{t('Services.title')}</h1>
        <p className="services-description">{t('Services.description')}</p>
      </div>
      <div className="services-img">
        <img src={Img} alt="services" />
      </div>
    </div>
  );
};

export default ServicesDescription;
