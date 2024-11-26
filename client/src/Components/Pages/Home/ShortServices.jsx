import React from 'react';
import './ShortServices.scss';
import myImage0 from '../../../assets/shortServices/ShortServices0.jpg';
import myImage1 from '../../../assets/shortServices/ShortServices1.jpg';
import myImage2 from '../../../assets/shortServices/ShortServices2.jpg';
import myImage3 from '../../../assets/shortServices/ShortServices3.jpg';

import { t } from 'i18next';
import ShortServicesMini from './ShortServicesMini';
import { NavLink } from 'react-router-dom';
import i18n from '../../../i18n';

const ShortServices = () => {
  return (
    <div className="short-services-container">
      <div className="short-services-text">
        <h2 className="short-services-title">
          {t('Home.short-services-title')}
        </h2>
        <div className="short-services-description">
          {t('Home.short-services-description')}
        </div>
      </div>
      <div className="short-services-list-services">
        <NavLink
          to={`${i18n.language == 'ua' ? '' : '/' + i18n.language}/services`}
        >
          <ShortServicesMini
            img={myImage0}
            title={t('Home.short-services-services-title0')}
            description={t('Home.short-services-services-description')}
          />
        </NavLink>
        <NavLink
          to={`${i18n.language == 'ua' ? '' : '/' + i18n.language}/services`}
        >
          <ShortServicesMini
            img={myImage1}
            title={t('Home.short-services-services-title1')}
            description={t('Home.short-services-services-description')}
          />
        </NavLink>
        <NavLink
          to={`${i18n.language == 'ua' ? '' : '/' + i18n.language}/services`}
        >
          <ShortServicesMini
            img={myImage2}
            title={t('Home.short-services-services-title2')}
            description={t('Home.short-services-services-description')}
          />
        </NavLink>
        <NavLink
          to={`${i18n.language == 'ua' ? '' : '/' + i18n.language}/services`}
        >
          <ShortServicesMini
            img={myImage3}
            title={t('Home.short-services-services-title3')}
            description={t('Home.short-services-services-description')}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default ShortServices;
