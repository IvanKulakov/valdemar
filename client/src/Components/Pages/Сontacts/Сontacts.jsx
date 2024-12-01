import React from 'react';
import './Contacts.scss';
import ContactsForm from './ContactsForm';
import { useTranslation } from 'react-i18next';
import ContactsMap from "./ContactsMap";
import ArrowButton from "../../utilsComponents/ArrowButton";

const Сontacts = () => {
  const { t } = useTranslation();
  return (
    <div className="contacts-main">
      <ContactsForm />
      <ContactsMap />
      <ArrowButton />

    </div>
  );
};

export default Сontacts;
