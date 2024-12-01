import React from 'react';
import './SocialNetworks.scss';
import { ReactComponent as TikTok } from '../../assets/svg/socialNetworks/TikTok.svg';
import { ReactComponent as YouTube } from '../../assets/svg/socialNetworks/YouTube.svg';
import { ReactComponent as Telegram } from '../../assets/svg/socialNetworks/Telegram.svg';
import { NavLink } from 'react-router-dom';

const SocialNetworks = () => {
  return (
    <div className="list-icon-main">
      <NavLink
        target="_blank"
        to={
          'https://api.whatsapp.com/send?phone=380683258368'
        }
      >
        <div className="social-network-icon">
          <TikTok />
        </div>
      </NavLink>
      <NavLink target="_blank" to={'viber://chat?number=+380683258368'}>
        <div className="social-network-icon">
          <YouTube />
        </div>
      </NavLink>
      <NavLink target="_blank" to={'https://t.me/Nina_pomosh'}>
        <div className="social-network-icon">
          <Telegram />
        </div>
      </NavLink>
    </div>
  );
};

export default SocialNetworks;
