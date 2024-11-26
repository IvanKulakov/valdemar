import React from 'react';
import './MiniMagicCandle.scss';
import { t } from 'i18next';
import { NavLink } from 'react-router-dom';
import i18n from '../../../i18n';

const MiniMagicCandle = ({ img, name, price }) => {
  return (
    <NavLink
      className="mini-magic-candle-main"
      to={`${i18n.language == 'ua' ? '' : '/' + i18n.language}/contacts`}
    >
      <div className="mini-magic-candle-container">
        <div className="mini-magic-candle">
          <div className="mini-magic-image">
            <img src={img} alt={t('Services.' + name)} />
          </div>
          <div className="mini-magic-text">
            <h2 className="mini-magic-name">{t('Services.' + name)}</h2>
          </div>
          <div className="mini-magic-button">
            <button>{t('Services.button2')}</button>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default MiniMagicCandle;
