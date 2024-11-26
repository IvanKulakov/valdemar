import React from 'react';
import './NotFound.scss';
import { ReactComponent as Number404 } from '../../../assets/notFound/404.svg';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="not-found">
        <div className="number404">
          <Number404 />
        </div>
        <h1>{t('404.title')}</h1>
        <p>{t('404.description')}</p>
        <div className="button-container">
          <NavLink to="/">
            <button>{t('404.button')}</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NotFound;
