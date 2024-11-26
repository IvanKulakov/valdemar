import React, { useState } from 'react';
import './AdviceForm.scss';
import axios from 'axios';
import { t } from 'i18next';
import { ReactComponent as Arrow } from '../../assets/svg/ArrowBottomRight.svg';

const AdviceForm = ({ title, description }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  // Функція для перевірки та форматування номера телефону
  const validatePhoneNumber = (phoneNumber) => {
    let formattedPhoneNumber = phoneNumber;

    // Якщо номер починається з 0, додаємо код країни +380
    if (/^0/.test(phoneNumber)) {
      formattedPhoneNumber = `+380${phoneNumber.slice(1)}`;
    }

    // Регулярний вираз для перевірки номерів телефону (міжнародний формат)
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const isValid = phoneRegex.test(formattedPhoneNumber);

    return { isValid, formattedPhoneNumber };
  };

  // Функція для надсилання повідомлення до Telegram
  const sendMessageToTelegram = async (formattedPhoneNumber) => {
    const token = process.env.REACT_APP_TELEGRAM_BOT_TOKEN; // Заміна на ваш токен бота
    const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID; // Заміна на ваш Chat ID
    const text = `Name: ${name}\nPhone: ${formattedPhoneNumber}`;

    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          chat_id: chatId,
          text: text,
        }
      );

      if (response.status === 200) {
        setMessageSent(true);
        setError(null);
      }
      console.log(text);
    } catch (error) {
      setError('Failed to send message. Please try again.');
      console.error('Error sending message:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      const { isValid, formattedPhoneNumber } = validatePhoneNumber(phone);
      if (isValid) {
        sendMessageToTelegram(formattedPhoneNumber);
      } else {
        setError('Invalid phone number. Please enter a valid phone number.');
      }
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div className="advice-form-container">
      <div className="advice-form-content">
        <h2 className="advice-form-title">{title}</h2>
        <div className="advice-form-description">{description}</div>
        <div className="advice-form-input">
          <input
            type="text"
            placeholder={t('Home.namePlaceholder')}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder={t('Home.phonePlaceholder')}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="advice-form-button">
          <button onClick={handleSubmit}>
            {t('Home.send')} <Arrow />
          </button>
        </div>
        {messageSent && (
          <div className="success-message" style={{ color: 'green' }}>
            {t('Reviews.reviewsSend')}
          </div>
        )}
        {error && (
          <div color="red" className="error-message" style={{ color: 'red' }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdviceForm;
