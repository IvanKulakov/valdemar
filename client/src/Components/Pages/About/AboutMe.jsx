import React from 'react';
import AboutMeWork from './AboutMeWork';
import ListReceipt from './ListReceipt';
import Answer from '../Home/Answer';
import { useTranslation } from 'react-i18next';
import ArrowButton from '../../utilsComponents/ArrowButton';
const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className="about-me">
      <AboutMeWork />
      <ListReceipt />
      <Answer />
      <ArrowButton />
    </div>
  );
};

export default AboutMe;
