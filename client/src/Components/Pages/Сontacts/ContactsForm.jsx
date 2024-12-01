import { t } from 'i18next';
import React, { useState } from 'react';
import axios from 'axios';
import './ContactsForm.scss';
import { ReactComponent as Line } from '../../../assets/StagesDevelopment/line.svg';
import { ReactComponent as Arrow } from '../../../assets/svg/ArrowBottomRight.svg';
import { isValidPhoneNumber } from 'libphonenumber-js';

const ContactsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+',
    email: '',
    message: '',
  });

  const [notification, setNotification] = useState({
    message: '',
    type: '', // success or error
  });

  // Регулярний вираз для перевірки email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    if (!name || !phone || !email || !message) {
      setNotification({
        message: t('Contacts.formMessage'),
        type: 'error',
      });
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      setNotification({
        message: t('Contacts.formMessage2'),
        type: 'error',
      });
      return;
    }

    if (!emailRegex.test(email)) {
      setNotification({
        message: t('Contacts.formMessage6'),
        type: 'error',
      });
      return;
    }

    const telegramMessage = `
      <b>Новий контакт:</b>
      <b>Ім'я:</b> ${name}
      <b>Телефон:</b> ${phone}
      <b>Email:</b> ${email}
      <b>Повідомлення:</b> ${message}
    `;

    try {
      await axios.post(
        `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: process.env.REACT_APP_TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'HTML',
        }
      );

      setNotification({
        message: t('Contacts.formMessage3'),
        type: 'success',
      });

      setFormData({ name: '', phone: '+', email: '', message: '' });
    } catch (error) {
      console.error(t('Contacts.formMessage4'), error);
      setNotification({
        message: t('Contacts.formMessage5'),
        type: 'error',
      });
    }
  };

  return (
    <div className="contacts-form-main">
      <div className="contacts-form-container">

        <div className="contacts-form-text">
          <div className="line">
            <Line />
          </div>
          <h1>{t('Contacts.title1')}</h1>
          <p>{t('Contacts.description1')}</p>
        </div>
        <form className="contacts-form-inputs" onSubmit={handleSubmit}>
          <div className="contacts-form-inputs-name-and-phone">
            <div className="contacts-form-inputs-name">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('Contacts.name')}
              />
            </div>
            <div className="contacts-form-inputs-phone">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder={t('Contacts.phone')}
              />
            </div>
          </div>
          <div className="contacts-form-email">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('Contacts.email')}
            />
          </div>
          <div className="contacts-form-textarea">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ width: '100%', height: '100px', margin: '20px 0' }}
              placeholder={t('Contacts.textarea')}
            ></textarea>
          </div>
          <div className="contacts-form-button">
            <button type="submit">
              {t('Contacts.send')} <Arrow />
            </button>
          </div>
        </form>
        {notification.message && (
          <div
            className={`notification ${
              notification.type === 'success'
                ? 'notification-success'
                : 'notification-error'
            }`}
          >
            {notification.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactsForm;
