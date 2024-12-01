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
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5444742.264525202!2d25.90107590783292!3d48.214983387109676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d1d9c154700e8f%3A0x1068488f64010!2z0KPQutGA0LDRl9C90LA!5e0!3m2!1suk!2sua!4v1733055052233!5m2!1suk!2sua">
          </iframe>
      </div>
    </div>
  );
};

export default ContactsMap;
