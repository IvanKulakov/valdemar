import React from 'react';
import ServicesDescription from './ServicesDescription';
import ListServices from './ListServices';
import Answer from '../Home/Answer';
import { useTranslation } from 'react-i18next';
import ArrowButton from '../../utilsComponents/ArrowButton';
import MagicCandle from './MagicCandle';

const Services = () => {
  const { t } = useTranslation();
  return (
    <div
      className="services-main"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ServicesDescription />
      {
        //<MagicCandle />
      }
      <ListServices />
      <Answer />
      <ArrowButton />
    </div>
  );
};

export default Services;
