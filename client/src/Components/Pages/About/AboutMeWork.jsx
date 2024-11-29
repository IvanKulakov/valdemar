import React from 'react';
import I from '../../../assets/Training/Rectangle.png';
import Necklaces from '../../../assets/AboutMe/necklaces.png';
import { ReactComponent as Line } from '../../../assets/svg/line.svg';
import './AboutMeWork.scss';
import { t } from 'i18next';

const AboutMeWork = () => {
  return (
    <div className="about-me-work">
      <div className="about-me-work-container">
        <div className="sesction">
          <div className="about-me-main-image-container">
            <img src={I} alt="About me" className="image-main" />
          </div>
          <div className="text-section">
            <Line />
            <h1>{t('AboutMe.aboutMe')}</h1>
            <p>{t('AboutMe.description1')}</p>
          </div>
        </div>

        <div className="section">
          <div className="image-secondary-container">
            <img
              className="image-secondary"
              src={Necklaces}
            />
          </div>
          <div className="text-section">
            <Line id="lineTraining2" />
            <h2>{t('AboutMe.whatIWork')}</h2>
            <p>{t('AboutMe.description2')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeWork;
