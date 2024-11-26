import React from 'react';
import imgStagesDevelopment from '../../../assets/TrainingPeople.png';
import { ReactComponent as Line } from '../../../assets/StagesDevelopment/line.svg';
import './TrainingPeople.scss';
import { t } from 'i18next';

const TrainingPeople = () => {
  return (
    <div className="training-people-container">
      <div className="training-people-img">
        <img src={imgStagesDevelopment}/>
      </div>
      <div className="training-people-text">
        <div className="line">
          <Line />
        </div>
        <h2 className="training-people-title">
          {t('Home.trainingPeopleTitle')}
        </h2>
        <div className="training-people-description">
          {t('Home.trainingPeopleDescription')}
        </div>
      </div>
    </div>
  );
};

export default TrainingPeople;
