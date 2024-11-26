import React from 'react';
import './ContactsMap.scss';
import { t } from 'i18next';

const ContactsMap = () => {
  return (
    <div className="contact-map">
      <div className="contact-map-container">
        <div className="contact-map-title">
          <h2>{t('Contacts.title2')}</h2>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d40659.12557734395!2d30.534338109202896!3d50.43746190000001!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1723065897818!5m2!1suk!2sua"></iframe>
      </div>
    </div>
  );
};

export default ContactsMap;
