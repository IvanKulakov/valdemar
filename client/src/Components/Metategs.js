import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const MetaTags = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const path = location.pathname;

  const isBlogPost = path.includes('/blog/');
  const basePath = isBlogPost ? '/blog' : path;

  const meta = t(basePath, { returnObjects: true });

  const clientUrl = process.env.REACT_APP_CLIENT;

  const supportedLanguages = ['en', 'uk', 'ru'];

  const alternateLinks = supportedLanguages.map((lang) => {
    const strippedPath = path.replace(/^\/(en|uk|ru)/, '');
    let alternatePath = lang === 'uk' ? strippedPath : `${lang}${strippedPath}`;
    if (alternatePath == 'en/') {
      alternatePath = 'en';
    } else if (alternatePath == 'ru/') alternatePath = 'ru';
    return (
      <link
        key={lang}
        rel="alternate"
        hrefLang={lang}
        href={`${clientUrl}${
          lang == 'uk'
            ? alternatePath.slice(1)
            : alternatePath.replace(/\/{2,}/g, '/')
        }`}
      />
    );
  });

  const canonicalUrl = `${window.location.origin}${path}`;

  if (!meta.title) {
    return null;
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: i18n.language == 'ua' ? 'uk' : i18n.language,
      }}
    >
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="robots" content={meta.robots} />
      <link rel="canonical" href={canonicalUrl} />
      {alternateLinks}
    </Helmet>
  );
};

export default MetaTags;
