import React from 'react';
import imgStagesDevelopment from '../../../assets/StagesDevelopment/stps.jpg';
import './StagesDevelopment.scss';
import { t } from 'i18next';
import { ReactComponent as Line } from '../../../assets/StagesDevelopment/line.svg';

const StagesDevelopment = () => {
  return (
    <div className="stages-development-container">
      <div className="stages-development-img">
        <img className="stages-development-img" src={imgStagesDevelopment} />

      </div>
      <div className="stages-development-text">
        <h2 className="stages-development-title">
          <div className="stages-development-line">
            <Line />
          </div>
          {t('Home.stages-development-title')}
        </h2>
        <ul className="stages-development-info">
          <li>{t('Home.stages-development-description1')}</li>
          <li>{t('Home.stages-development-description2')}</li>
          <li>{t('Home.stages-development-description3')}</li>
          <li>{t('Home.stages-development-description4')}</li>
        </ul>
      </div>
    </div>
  );
};

export default StagesDevelopment;
