import React from 'react';
import './Skull.scss';
import { t } from 'i18next';

const Skull = () => {
  return (
    <div className="skull-container">
      <div className="skull-text">
        <h1 className="skull-title">{t('Home.VALDEMAR')}</h1>
        <div className="skull-description">
          <div
            dangerouslySetInnerHTML={{
              __html: t('Home.VALDEMAR_descritpion-pc'),
            }}
            className="skull-description-pc"
          ></div>
          <div
            className="skull-description-mobile"
            dangerouslySetInnerHTML={{
              __html: t('Home.VALDEMAR_descritpion-mobile'),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Skull;
