import React, { useEffect, useRef, useState } from 'react';
import './MagicCandle.scss';
import { magicCandle } from '../../../assets/services/magicCandle';
import MiniMagicCandle from './MiniMagicCandle';
import { t } from 'i18next';

const MagicCandle = () => {
  return (
    <div className="magic-candle-main">
      <div className="magic-candle-text">
        <h2>{t('Services.magicCandleTitle')}</h2>

        <div className="magic-candle-description">
          {t('Services.magicCandleDescription')}
        </div>
      </div>
      <div className="list-candle">
        {magicCandle.map((x) => (
          <MiniMagicCandle
            key={x.id}
            img={x.img}
            name={x.name}
            price={x.price}
          />
        ))}
      </div>
    </div>
  );
};

export default MagicCandle;
