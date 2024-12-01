import React from 'react';
import './Contacts.scss';
import ContactsForm from './ContactsForm';
import { useTranslation } from 'react-i18next';
import ContactsMap from "./ContactsMap";

const Сontacts = () => {
  const { t } = useTranslation();
  return (
    <div className="contacts-main">
      <ContactsForm />
      <ContactsMap />
    </div>
  );
};

export default Сontacts;
