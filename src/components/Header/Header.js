import React from 'react';
import { Link } from 'react-router-dom';
import { Catalog, Languages, Navbar, Search, SocialNetwork, UserActions, UserPanel } from '../../components';
import { mainLogo } from './../../assets';

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
    </header>
  );
};

export default Header;
