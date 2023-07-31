import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Catalog, Navbar } from '../../components';
import { ellipse, mainLogo, user } from './../../assets';
import SocialNetwork from '../SocialNetwork';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDataAsync, setAuthStatus } from '../../redux/auth/action';
import { langList, additionList } from '../../utils/data';

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
    const userLogged = localStorage.getItem('user');
    if (userLogged) {
      dispatch(setAuthStatus(true));
      dispatch(getUserDataAsync());
    }
  }, [isAuth, dispatch]);

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
            <SocialNetwork />
            <div className="language">
              {langList.map((el) => (
                <button key={el.key} className="language-item">
                  {el.code}
                </button>
              ))}
            </div>
            <div className="login">
              <img src={user} alt="login" />
              {!isAuth ? (
                <Link className="profile" to="/signin">
                  Вхід
                </Link>
              ) : (
                <Link className="profile" to="/profile">
                  Кабінет
                </Link>
              )}
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
