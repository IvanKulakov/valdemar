import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../utilsComponents/navLinks';
import './BurgerMenu.scss';
import { ReactComponent as Logo } from '../../../assets/svg/logoPC.svg';
import { FaTimes } from 'react-icons/fa';
import { t } from 'i18next';
import SocialNetworks from '../../utilsComponents/SocialNetworks';
import i18n from '../../../i18n';

const BurgerMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <div className="burger-menu-container">
        <div className="burger-menu-header">
          <Logo className="burger-logo" />
          <FaTimes className="close-icon" color="#aeafaf" onClick={onClose} />
        </div>
        <ul className="burger-nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={`${i18n.language == 'ua' ? '' : '/' + i18n.language}${
                  link.path
                }`}
                className={({ isActive }) => (isActive ? 'active' : '')}
                style={({ isActive }) => ({
                  color: isActive ? '#FFFFFF' : '#AEAFAF',
                })}
                onClick={onClose}
              >
                {t(link.name)}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink to="/contacts">
          <div className="burger-contact-container">{t('Header.contact')}</div>
        </NavLink>
        <div className="burger-social-network">
          <SocialNetworks />
        </div>
        <div className="burger-info">{t('Footer.info')}</div>
      </div>
    </div>
  );
};

export default BurgerMenu;
