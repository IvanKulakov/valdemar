import React from 'react';
import AdviceForm from '../../utilsComponents/AdviceForm';
import { t } from 'i18next';
import './Answer.scss';

const Answer = () => {
  return (
    <div className="answer-main1">
      <AdviceForm
        title={t('Home.answer2')}
        description={t('Home.advive-form-description')}
      />
    </div>
  );
};

export default Answer;
