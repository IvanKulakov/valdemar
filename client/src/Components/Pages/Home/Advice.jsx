import React from 'react';
import AdviceForm from '../../utilsComponents/AdviceForm';
import './Advice.scss';
import { t } from 'i18next';

const Advice = () => {
  return (
    <div className="advice-container">
      <AdviceForm
        title={t('Home.advive-form-title')}
        description={t('Home.advive-form-description')}
      />
    </div>
  );
};

export default Advice;
