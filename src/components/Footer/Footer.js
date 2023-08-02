import React from 'react';
import { SocialNetwork } from '../../components';
import { Link } from 'react-router-dom';
import { liqpay, mastercard, visa } from '../../assets';
import { catalogList, navFooterList } from '../../utils/data';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top-block">
          <div className="contacts">
            <div className="number headline">(063) 128-46-09</div>
            <div className="email text">bubu.shop2018@gmail.com</div>
            <div className="address text">Одеса, вул. Михайлівська 8 (щодня з 10:00 до 20:00)</div>
            <SocialNetwork />
          </div>
          <div className="information">
            <h2 className="headline">інформація</h2>
            <ul className="information-list">
              {navFooterList.map((el) => (
                <li key={el.key} className="information-item">
                  <Link className="text" to={el.link}>
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="catalog">
            <h2 className="headline">каталог</h2>
            <ul className="catalog-list">
              {catalogList.map((el) => (
                <li key={el.key} className="catalog-item">
                  <Link to={el.link}>
                    <span className="text">{el.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>© Bubu 2022. Всі права захищені.</p>
          <div className="cards">
            <img src={mastercard} alt="Master Card" />
            <img src={visa} alt="Visa" />
            <img src={liqpay} alt="LIGPAY" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
