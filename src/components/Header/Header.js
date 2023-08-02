import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Catalog, Languages, Navbar, Search, SocialNetwork, UserActions, UserPanel } from '../../components';
import { mainLogo } from './../../assets';

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 1000);
      setSearchButton(window.innerWidth < 768);
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
            <div className="left-block">
              <button className="toggle-menu-btn" onClick={toggleMenu}>
                <span className="toggle-item"></span>
              </button>
              <Link to="/" className="logo">
                <img src={mainLogo} alt="Bubu Store" />
              </Link>
            </div>
            <div className="right-block">
              {searchButton ? <Search isButton={true} /> : <Search />}
              <UserActions />
            </div>
          </div>
          {isOpen && (
            <div className="toggle-menu">
              <button className="close-toggle-menu" onClick={toggleMenu}>
                &#9587;
              </button>
              <Catalog isMobile={mobile} toggleMenu={toggleMenu} />
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
            <Catalog isMobile={mobile} />
            <Search />
            <UserActions />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
