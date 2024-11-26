import React from 'react';
import img from '../../../assets/aboutI/AboutI1.png';
import imgMobile from '../../../assets/aboutI/AboutI0.png';
import { t } from 'i18next';
import './AboutI.scss';

const AboutI = () => {
  return (
    <div className="about-i-container">
      <div className="about-i-text">
        <div className="about-i-title">{t('Home.aboutI-title')}</div>
        <div className="about-i-desciption">{t('Home.aboutI-description')}</div>
      </div>
      <div className="about-i-img">
        <img id="about-i-pc" src={img} alt="about i" />
      </div>
    </div>
  );
};

export default AboutI;
