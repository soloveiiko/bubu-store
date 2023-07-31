import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Catalog, Languages, Navbar, Search, SocialNetwork, UserActions, UserPanel } from '../../components';
import { mainLogo } from './../../assets';

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 1000);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      {mobile ? (
        <div className="container">
          <div className="top-block">
            <button className="toggle-menu-btn" onClick={toggleMenu}>
              <span className="toggle-item"></span>
            </button>
            <Link to="/" className="logo">
              <img src={mainLogo} alt="Bubu Store" />
            </Link>
            <Search />
            <UserActions />
          </div>
          {isOpen && (
            <div className="toggle-menu">
              <Catalog />
              <Navbar />
              <div className="tools">
                <div className="number">(063) 128-46-09</div>
                <SocialNetwork />
                <Languages />
                <UserPanel />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="container">
          <div className="top-block">
            <Link to="/" className="logo">
              <img src={mainLogo} alt="Bubu Store" />
            </Link>
            <Navbar />
            <div className="tools">
              <div className="number">(063) 128-46-09</div>
              <SocialNetwork />
              <Languages />
              <UserPanel />
            </div>
          </div>
          <div className="bottom-block">
            <Catalog />
            <Search />
            <UserActions />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
