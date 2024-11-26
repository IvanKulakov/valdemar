import React from 'react';
import './Contacts.scss';
import ContactsForm from './ContactsForm';
import ContactsMap from './ContactsMap';
import { useTranslation } from 'react-i18next';

const Сontacts = () => {
  const { t } = useTranslation();
  return (
    <div className="contacts-main">
      <ContactsForm />
    </div>
  );
};

export default Сontacts;
