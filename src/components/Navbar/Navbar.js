import React from 'react';
import { NavLink } from 'react-router-dom';
import { navHeaderList } from '../../utils/data';
const Navbar = () => {
  return (
    <nav className="main-menu">
      <ul className="menu-list">
        {navHeaderList.map((el) => (
          <li key={el.key} className="menu-item">
            <NavLink to={el.link}>{el.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
