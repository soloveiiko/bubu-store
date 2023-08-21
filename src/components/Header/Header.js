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

const Header = ({ location }) => {
  const [mobile, setMobile] = useState(false);
  const [searchButton, setSearchButton] = useState(false);
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [isOpenCatalog, setIsOpenCatalog] = useState(false);
  useEffect(() => {
    const path = location.pathname;
    if (path === '/' && window.innerWidth >= 1200) {
      setIsOpenCatalog(true);
    } else {
      setIsOpenCatalog(false);
    }
    console.log('isOpenCatalog', isOpenCatalog);
    const handleResize = () => {
      setMobile(window.innerWidth <= 1199);
      setSearchButton(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.location.pathname]);
  const toggleButton = (setItem, item) => {
    setItem(!item);
  };

  return (
    <header className="header">
      {mobile ? (
        <div className="header__container container">
          <div className="header__block_top">
            <div className="header__block_left">
              <button
                className="header__toggle-btn toggle-menu-btn"
                onClick={() => toggleButton(setIsOpenNavbar, isOpenNavbar)}
              >
                <span className="header__toggle-item"></span>
              </button>
              <Link to="/" className="header__logo">
                <img src={logoWhite} alt="Bubu Store" />
              </Link>
            </div>
            <div className="header__block_right">
              {searchButton ? <Search isButton={true} /> : <Search />}
              <UserActions />
            </div>
          </div>
          {isOpenNavbar && (
            <div className="header__toggle-menu toggle-menu">
              <CloseButton onClick={() => toggleButton(setIsOpenNavbar, isOpenNavbar)} />
              <CatalogMenu
                isMobile={mobile}
                toggleMenu={() => toggleButton(setIsOpenNavbar, isOpenNavbar)}
                toggleButton={() => toggleButton(setIsOpenCatalog, isOpenCatalog)}
                isOpenCatalog={isOpenCatalog}
              />

              <Navbar />
              <div className="header__tools tools">
                <div className="tools__number">(063) 128-46-09</div>
                <SocialNetwork />
                <Languages />
                <UserPanel />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="header__container container">
          <div className="header__block_top">
            <Link to="/" className="header__logo">
              <img src={logoWhite} alt="Bubu Store" />
            </Link>
            <Navbar />
            <div className="header__tools tools">
              <div className="tools__number">(063) 128-46-09</div>
              <SocialNetwork />
              <Languages />
              <UserPanel />
            </div>
          </div>
          <div className="header__block_bottom">
            <CatalogMenu
              isMobile={mobile}
              toggleButton={() => toggleButton(setIsOpenCatalog, isOpenCatalog)}
              isOpenCatalog={isOpenCatalog}
            />
            <Search />
            <UserActions />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
