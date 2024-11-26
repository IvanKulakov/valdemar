import React from 'react';
import I from '../../../assets/Training/image1.mp4';
import Necklaces from '../../../assets/Training/image2.mp4';
import { ReactComponent as Line } from '../../../assets/svg/line.svg';
import './AboutMeWork.scss';
import { t } from 'i18next';

const AboutMeWork = () => {
  return (
    <div className="about-me-work2">
      <div className="about-me-work-container">
        <div className="sesction">
          <div className="about-me-main-image-container">
            <video autoPlay loop muted playsInline>
              <source src={I} type="video/mp4" />
            </video>
          </div>
          <div className="text-section">
            <div className="additional-info-container">
              <div
                dangerouslySetInnerHTML={{
                  __html: t('Training.additionalWork'),
                }}
                className="additional-info"
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: t('Training.additionalWorkMobile'),
                }}
                className="additional-info-mobile"
              />
            </div>
            <Line className="training-line-1" />
            <h1>{t('Training.title1')}</h1>
            <p>{t('Training.description1')}</p>
          </div>
        </div>

        <div className="section">
          <div className="image-secondary-container">
            <video
              style={{ maxHeight: '45em' }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={Necklaces} type="video/mp4" />
            </video>
          </div>
          <div className="text-section">
            <Line className="training-line-2" />
            <h2>{t('Training.title2')}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: t('Training.description2'),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeWork;
