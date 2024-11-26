import React from 'react';
import AboutMeWork from './AboutMeWork';
import Answer from '../Home/Answer';
import { useTranslation } from 'react-i18next';
import ArrowButton from '../../utilsComponents/ArrowButton';
import ListReceipt from '../About/ListReceipt';
const Training = () => {
  const { t } = useTranslation();
  return (
    <div className="training">
      <AboutMeWork />
      <ListReceipt />
      <Answer />
      <ArrowButton />
    </div>
  );
};

export default Training;
