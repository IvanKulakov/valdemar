import React, { useState } from 'react';
import axios from 'axios';
import './FormReviews.scss';
import { t } from 'i18next';
import { ReactComponent as Arrow } from '../../../assets/svg/ArrowBottomRight.svg';

const FormReviews = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await axios.post(`${process.env.REACT_APP_SERVER}reviews`, {
        name,
        description,
      });
      setSuccess(t('Reviews.reviewsSend'));
      setName('');
      setDescription('');
    } catch (err) {
      setError(t('Reviews.reviewsError'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-reviews-main">
      <div className="form-reviews">
        <div className="form-reviews-text">
          <h2>{t('Reviews.formTitle')}</h2>
          <span>{t('Reviews.formDescription')}</span>
        </div>
        <div className="form-reviews-inputs-and-button">
          <div className="form-reviews-inputs">
            <input
              type="text"
              placeholder={t('Reviews.formName')}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              style={{ width: '100%', height: '100px', margin: '20px 0' }}
              placeholder={t('Reviews.formInputDescription')}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-reviews-button">
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? 'Надсилання...' : t('Reviews.send')} <Arrow />
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default FormReviews;
