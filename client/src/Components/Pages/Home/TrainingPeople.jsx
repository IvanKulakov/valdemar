import React from 'react';
import imgStagesDevelopment from '../../../assets/Training/Rectangle.png';
import { ReactComponent as Line } from '../../../assets/StagesDevelopment/line.svg';
import './TrainingPeople.scss';
import { t } from 'i18next';
import {NavLink} from "react-router-dom";

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
          {t('Home.aboutI-title')}
        </h2>
        <div className="training-people-description">
          {t('Home.trainingPeopleDescription')}
            <br/>
            <NavLink to={'/about'} className="training-people-description_link">
                {t('Home.trainingPeopleNext')}
            </NavLink>

        </div>
      </div>
    </div>
  );
};

export default TrainingPeople;
