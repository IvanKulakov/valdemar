// LanguageSwitcher.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import i18next from 'i18next';

const LanguageSwitcher = () => {
  const location = useLocation();

  useEffect(() => {
    // Отримуємо перший сегмент URL для визначення мови
    const pathParts = location.pathname.split('/');
    const lang = pathParts[1];

    // Змінюємо мову залежно від URL
    if (['en', 'ru', ''].includes(lang)) {
      const language = lang === '' ? 'ua' : lang; // Якщо шлях порожній, мова за замовчуванням - українська
      i18next.changeLanguage(language);
    }
  }, [location.pathname]);

  return null;
};

export default LanguageSwitcher;
