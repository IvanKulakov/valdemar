import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Імпорт NavLink
import { navLinks } from '../utilsComponents/navLinks';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/svg/logoPC.svg';
import { ReactComponent as Burger } from '../../assets/svg/burger.svg';
import SetLanguage from './SetLanguage';
import BurgerMenu from './Burger/BurgerMenu';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { t } = useTranslation();
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <NavLink to={'/'}>
            <Logo />
          </NavLink>
        </div>
        <div className="links-with-language">
          <nav>
            <ul className="nav-links">
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
                  >
                    {t(link.name)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="contact-info">
            <span>
              <a className="contact-info_tel" href="tel:+380683258368">+(380) 68 325 83 68</a>
            </span>
          </div>
          <div className="set-language">
            <SetLanguage />
          </div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <Burger />
        </div>
      </div>
      <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
