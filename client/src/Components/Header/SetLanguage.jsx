import React, { useEffect, useState } from 'react';
import './SetLanguage.scss';

import { ReactComponent as EnFlag } from '../../assets/svg/flags/en.svg';
import { ReactComponent as UaFlag } from '../../assets/svg/flags/ua.svg';
import { ReactComponent as RuFlag } from '../../assets/svg/flags/ru.svg';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import i18n from '../../i18n';
import { NavLink, useLocation } from 'react-router-dom';

const SetLanguage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ua');
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Generate the URL based on the selected language
  const getSrc = (lang) => {
    let newSrc = location.pathname.split('/').filter(Boolean); // Remove empty strings
    if (newSrc[0] === 'en' || newSrc[0] === 'ru') {
      newSrc.shift(); // Remove current language prefix
    }
    if (lang !== 'ua') {
      newSrc.unshift(lang); // Add the selected language prefix
    }
    return `/${newSrc.join('/')}`; // Reconstruct the URL
  };

  // Define languages with their respective flags
  const languages = [
    { code: 'en', label: 'English', flag: <EnFlag /> },
    { code: 'ua', label: 'Українська', flag: <UaFlag /> },
    { code: 'ru', label: 'Русский', flag: <RuFlag /> },
  ];

  // Update selected language when i18n language changes
  useEffect(() => {
    setSelectedLanguage(i18n.language || 'ua');
  }, [i18n.language]);

  const currentLanguage = languages.find(
    (lang) => lang.code === selectedLanguage
  );

  return (
    <div className="set-language">
      <div className="selected-language" onClick={toggleDropdown}>
        <span className="flag-icon">{currentLanguage.flag}</span>
        <span className="arrow">
          {isOpen ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
        </span>
      </div>
      {isOpen && (
        <div className="dropdown">
          {languages
            .filter((x) => x.code !== selectedLanguage)
            .map((lang) => (
              <NavLink
                key={lang.code}
                to={getSrc(lang.code)}
                onClick={() => {
                  setIsOpen(false); // Close the dropdown after selecting a language
                  i18n.changeLanguage(lang.code); // Change the language in i18n
                }}
              >
                <div className={`dropdown-item`}>
                  <span className="flag-icon">{lang.flag}</span>
                </div>
              </NavLink>
            ))}
        </div>
      )}
    </div>
  );
};

export default SetLanguage;
