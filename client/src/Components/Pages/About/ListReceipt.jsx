import React from 'react';
import './ListReceipt.scss';
import { ReactComponent as Number1 } from '../../../assets/svg/ListReceipt/1.svg';
import { ReactComponent as Number2 } from '../../../assets/svg/ListReceipt/2.svg';
import { ReactComponent as Number3 } from '../../../assets/svg/ListReceipt/3.svg';
import { ReactComponent as Line } from '../../../assets/svg/Line2.svg';
import { t } from 'i18next';

const ListReceipt = () => {
  return (
    <div className="list-receipt-main">
      <h2>{t('AboutMe.title2')}</h2>
      <div className="receipts">
        <div className="receipt-item">
          <div className="number-container">
            <Number1 className="number number1" />
          </div>
          <div className="text">
            <p
              dangerouslySetInnerHTML={{
                __html: t('AboutMe.listReceiptMiniDescription1'),
              }}
            />
            <Line />
          </div>
        </div>
        <div className="receipt-item">
          <div className="number-container">
            <Number2 className="number" />{' '}
          </div>

          <div className="text">
            <p
              dangerouslySetInnerHTML={{
                __html: t('AboutMe.listReceiptMiniDescription2'),
              }}
            />
            <Line />
          </div>
        </div>
        <div className="receipt-item">
          <div className="number-container">
            <Number3 className="number" />{' '}
          </div>

          <div className="text">
            <p
              dangerouslySetInnerHTML={{
                __html: t('AboutMe.listReceiptMiniDescription3'),
              }}
            />
            <Line />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListReceipt;