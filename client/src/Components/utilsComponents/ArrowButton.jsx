import React from 'react';
import './ArrowButton.scss';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import { FaTelegramPlane } from 'react-icons/fa';

const ArrowButton = () => {
  return (
    <div className="arrow-button-main">
      <a href="viber://chat?number=380683258368" className="viber">
        <MdOutlinePhoneInTalk size={'35px'} color="#ffffff" />
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=380683258368&text&type=phone_number&app_absent=0"
        className="whatsApp"
      >
        <SiWhatsapp size={'35px'} color="#ffffff" />
      </a>
      <a href="https://t.me/Nina_pomosh" className="telegram">
        <FaTelegramPlane size={'35px'} color="#ffffff" />
      </a>
      <a href="tel:+380683258368" className="phone">
        <MdOutlinePhoneInTalk size={'35px'} color="#ffffff" />
      </a>
    </div>
  );
};

export default ArrowButton;
