import React from 'react';
import { Link } from 'react-router-dom';
import { SocialNetwork } from '../commons';
import { liqPay, mastercard, visa } from '../../assets';
import { catalogList } from '../../utils/data';

const navList = [
  { id: '1', name: 'Про нас', link: '#' },
  { id: '2', name: 'Контакти', link: '#' },
  { id: '3', name: 'Доставка і оплата', link: '#' },
  { id: '4', name: 'Повернення і обмін', link: '#' },
  { id: '5', name: 'Політика конфеденційності', link: '#' },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__block_top">
          <div className="footer__contacts contacts">
            <div className="contacts__number headline">(063) 128-46-09</div>
            <div className="contacts__email text">bubu.shop2018@gmail.com</div>
            <div className="contacts__address text">Одеса, вул. Михайлівська 8 (щодня з 10:00 до 20:00)</div>
            <SocialNetwork />
          </div>
          <div className="footer__information contact-information">
            <h2 className="contact-information__headline headline">інформація</h2>
            <ul className="contact-information__list">
              {navList.map((el) => (
                <li key={el.id} className="contact-information__item">
                  <Link className="contact-information__text text" to={el.link}>
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__catalog catalog-footer">
            <h2 className="catalog-footer__headline headline">каталог</h2>
            <ul className="catalog-footer__list">
              {catalogList.map((el) => (
                <li key={el.id} className="catalog-footer__item">
                  <Link to={el.link}>
                    <span className="catalog-footer__text text">{el.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__copyright copyright">
          <p>© Bubu 2022. Всі права захищені.</p>
          <div className="copyright__cards">
            <img src={mastercard} alt="Master Card" />
            <img src={visa} alt="Visa" />
            <img src={liqPay} alt="LIGPAY" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
