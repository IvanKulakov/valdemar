// App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Pages/Home/Home';
import AboutMe from './Components/Pages/About/AboutMe';
import Services from './Components/Pages/Services/Services';
import Reviews from './Components/Pages/Reviews/Reviews';
import Contacts from './Components/Pages/Сontacts/Сontacts';
import NotFound from './Components/Pages/NotFound/NotFound';
import i18n from './i18n';
import Training from './Components/Pages/Training/Training';

function App() {
  const changeLanguageBasedOnUrl = (pathname) => {
    const pathParts = pathname.split('/');
    const language = pathParts[1]; // expect language code as first part of path
    if (['en', 'ru', 'ua'].includes(language)) {
      i18n.changeLanguage(language); // change language based on URL
    } else {
      i18n.changeLanguage('ua'); // default to 'ua' if no language is found
    }
  };

  useEffect(() => {
    changeLanguageBasedOnUrl(window.location.pathname);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/2" element={<Services />} />
          <Route path="/services/3" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* Англійська */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/about" element={<AboutMe />} />
          <Route path="/en/services" element={<Services />} />
          <Route path="/en/services/2" element={<Services />} />
          <Route path="/en/services/3" element={<Services />} />
          <Route path="/en/contacts" element={<Contacts />} />
          {/* Російська */}
          <Route path="/ru" element={<Home />} />
          <Route path="/ru/about" element={<AboutMe />} />
          <Route path="/ru/services" element={<Services />} />
          <Route path="/ru/services/2" element={<Services />} />
          <Route path="/ru/services/3" element={<Services />} />
          <Route path="/ru/contacts" element={<Contacts />} />

          {/* Обробка 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
