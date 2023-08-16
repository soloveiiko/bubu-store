import React, { useEffect, useState } from 'react';
import Search from './Search/Search';
import UserActions from './UserActions/UserActions';
import CatalogMenu from '../CatalogMenu/CatalogMenu';
import Navbar from './Navbar/Navbar';
import Languages from './Languages/Languages';
import UserPanel from './UserPanel/UserPanel';
import { SocialNetwork } from '../commons';
import { Link } from 'react-router-dom';
import { logoWhite } from './../../assets';
import CloseButton from '../commons/CloseButton/CloseButton';

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 1199);
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
                <img src={logoWhite} alt="Bubu Store" />
              </Link>
            </div>
            <div className="right-block">
              {searchButton ? <Search isButton={true} /> : <Search />}
              <UserActions />
            </div>
          </div>
          {isOpen && (
            <div className="toggle-menu">
              <CloseButton onClick={toggleMenu} />
              <CatalogMenu isMobile={mobile} toggleMenu={toggleMenu} />
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
              <img src={logoWhite} alt="Bubu Store" />
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
            <CatalogMenu isMobile={mobile} />
            <Search />
            <UserActions />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
