import React from 'react';
import { useTranslation } from 'react-i18next';
import Skull from './Skull';
import ShortServices from './ShortServices';
import StagesDevelopment from './StagesDevelopment';
import AboutI from './AboutI';
import Advice from './Advice';
import TrainingPeople from './TrainingPeople';
import ReviewsHome from './ReviewsHome';
import Answer from './Answer';
import ArrowButton from '../../utilsComponents/ArrowButton';

const Home = () => {
    window.scrollTo(0, 0);
    const { t } = useTranslation();

  return (
    <div className="home-container">
      <Skull />
      <ShortServices />
      {/*<AboutI />*/}
      <TrainingPeople />
        {/*<Advice />*/}
        <Answer />
      <StagesDevelopment />
        <ArrowButton />

      {/*<ReviewsHome />*/}

    </div>
  );
};

export default Home;
