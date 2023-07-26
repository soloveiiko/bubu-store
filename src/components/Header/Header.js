import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Catalog } from '../../components';
import { mainLogo, instagram, facebook, youtube, user, ellipse, comparison, favorite, vector } from './../../assets';
const socialNetworkList = [
  { key: 'instagram', name: 'instagram', logo: instagram, link: '#' },
  { key: 'youtube', name: 'youtube', logo: youtube, link: '#' },
  { key: 'facebook', name: 'facebook', logo: facebook, link: '#' },
];
const langList = [
  { key: 'ukrainian', code: 'Укр' },
  { key: 'english', code: 'Англ' },
];
const additionList = [
  { key: 'comparison', className: 'comparison', logo: comparison, counter: 0 },
  { key: 'favorite', className: 'favorite', logo: favorite, counter: 0 },
  { key: 'vector', className: 'vector', logo: vector, counter: 0 },
];
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="top-block">
          <Link to="/" className="logo">
            <img src={mainLogo} alt="logo" />
          </Link>

          <Navbar />
          <div className="tools">
            <div className="number">(063) 128-46-09</div>
            <div className="social-network">
              <ul className="social-network-list">
                {socialNetworkList.map((el) => (
                  <li key={el.key} className="social-network-item">
                    <Link to={el.link}>
                      <img src={el.logo} alt={el.name} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="language">
              {langList.map((el) => (
                <button key={el.key} className="language-item">
                  {el.code}
                </button>
              ))}
            </div>
            <div className="login">
              <img src={user} alt="login" />
              <Link className="profile" to="/profile">
                Вхід
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom-block">
          <div className="catalog-container">
            <button className="catalog-button">
              <span className="catalog-logo"></span>
              Каталог
            </button>
            <Catalog />
          </div>
          <div className="search">
            <input type="text" placeholder="Я шукаю..." />
            <img src={ellipse} alt="search" />
          </div>
          <div className="additions">
            {additionList.map((el) => (
              <div key={el.key} className={el.className}>
                <img src={el.logo} alt={el.className} />
                <span>{el.counter}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
