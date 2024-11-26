import React from 'react';
import './MiniServices.scss';
import { t } from 'i18next';
import { Link } from 'react-router-dom';
import SocialNetworks from '../../utilsComponents/SocialNetworks';

const MiniServices = ({ services }) => {
  return (
    <div className="mini-services">
      <div className="mini-services-img">
        {services.isImage ? (
          <img src={services.img} alt={services.title} />
        ) : (
          <video
            className="video-background"
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline=""
            x-webkit-airplay="allow"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
            x5-video-orientation="portraint"
          >
            <source src={services.img} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="mini-serivces-text">
        <h2 className="mini-services-title">
          {t('Services.' + services.title)}
        </h2>
        <p className="mini-serivces-description">
          {t('Services.' + services.description)}
        </p>
        <div className="phones-and-social-container">
          <div className="phones-and-social">
            <div >
              <Link className="phones" href="tel:+380683258368">+(380) 68 325 83 68</Link>
            </div>
            <div className="social">
              <SocialNetworks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniServices;
