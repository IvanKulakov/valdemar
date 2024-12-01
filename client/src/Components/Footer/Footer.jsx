import React from 'react';
import SocialNetworks from '../utilsComponents/SocialNetworks';
import './Footer.scss';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Line } from '../../assets/svg/FooterLine.svg';
import { navLinks } from '../utilsComponents/navLinks';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-main">
      <div className="footer-logo-with-social-network">
        <div className="footer-logo-and-number-phone">
            <div className="logo">
                <NavLink to={'/'}>
                  <Logo width="200px" />
                </NavLink>
              </div>
            <div className="footer-phone-block">
                    <a className="footer-phone" href="tel:+380683258368">+(380) 68 325 83 68</a>
                    <a className="footer-phone" href="mailto:dgalinka001@gmail.com">dgalinka001@gmail.com</a>
                </div>
        </div>
        <div className="footer-list-links-and-info">
              <div className="footer-list-links">
                  {navLinks.map((x, idx) => (
                      <NavLink
                          key={idx}
                          to={`${i18n.language == 'ua' ? '' : '/' + i18n.language}${
                              x.path
                          }`}
                      >
                          {t(x.name)}
                      </NavLink>
                  ))}
              </div>
              <div className="footer-line-mini" />
          </div>
        <div className="footer-social-network">
              <SocialNetworks />
          </div>
      </div>
      <div className="footer-line">
        <Line />
      </div>
        <div className="footer-info_block">
            {t('Footer.info1')}
        </div>
        <div className="footer-info_block">
            {t('Footer.info')}
        </div>
        <div className="footer-line-mini" />

              <a style={{ opacity: 0, cursor: 'default' }} href="/">
                Українська
              </a>
              <a style={{ opacity: 0, cursor: 'default' }} href="/en">
                English
              </a>
              <a style={{ opacity: 0, cursor: 'default' }} href="/ru">
                Руский
              </a>
    </div>
  );
};

export default Footer;
