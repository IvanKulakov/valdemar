import { t } from 'i18next';
import React from 'react';
import './ReviewsHome.scss';
import MiniReviews from '../../utilsComponents/MiniReviews';
import { NavLink } from 'react-router-dom';
import i18n from '../../../i18n';

const ReviewsHome = () => {
  return (
    <div className="reviews-home-main">
      <h2 className="reviews-title">{t('Home.reviewsTitle')}</h2>
      <h3 className="reviews-mini-title">{t('Home.reviewsMiniTitle')}</h3>
      <div className="reviews-mini-list">
        <MiniReviews
          name="Анна"
          description="Хочу висловити щиру подяку за вашу магічну допомогу і захист моїх дітей від небезпеки. Ваше втручання стало для нас справжнім порятунком. Дякую вам!"
          countStar={5}
        />
        <MiniReviews
          name="Юлія"
          description="Хотіла подякувати за амулет. Відчуваю, що він ідеально підійшов: зникла тривожність, з’явилося бажання піклуватися про себе і йти до мети. Амулет забрав переживання."
          countStar={5}
        />
        <MiniReviews
          name="Максим"
          description="Спасибо большое за помощь и проделанную работу. Результат впечатляющий. Ваше профессиональное мастерство блестящее. Благодарю вас за ваше внимание к деталям."
          countStar={5}
        />
        <MiniReviews
          name="Оксана "
          description="Вальдемар, спасибо за твою супер работу. Я чувствую твоё отношение как раньше, до того, как нашу семью разрушила эта тварь. Твоя помощь очень важна для меня."
          countStar={5}
        />
        <MiniReviews
          name="Вікторія"
          description="Я хотіла б вам щиро подякувати. Думаю, що завдяки вам я виглядаю значно краще і почуваюся краще. З кожним моїм днем все змінюється лише на краще. Дуже дякую."
          countStar={5}
        />
        <MiniReviews
          name="Лилия"
          description="Три дня с амулетами дали очень отличные результаты. Я стала намного спокойнее, нормализовался мой сон, которого не было полгода. Теперь я не просыпаюсь ночью."
          countStar={5}
        />
        <MiniReviews
          name="John"
          description="I ordered an amulet and I am very pleased with it. It has a very strong effect—wearing it makes you feel different. I highly recommend the amulet. Thank you great Valdemar!"
          countStar={5}
        />
        <MiniReviews
          name="Kate"
          description="Thank you for your incredible help. After the cleansing, I feel truly happy and renewed. I’m very grateful for your support and guidance. Wishing you all the best Valdemar!"
          countStar={5}
        />
      </div>
      <NavLink
        to={`${i18n.language == 'ua' ? '' : '/' + i18n.language}/reviews`}
      >
      </NavLink>
    </div>
  );
};
export default ReviewsHome;
