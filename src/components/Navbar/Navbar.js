import React from 'react';
import { NavLink } from 'react-router-dom';
export const navList = [
  { key: 'aboutUs', name: 'Про нас', link: '#' },
  { key: 'contacts', name: 'Контакти', link: '#' },
  { key: 'delivery', name: 'Доставка і оплата', link: '#' },
  { key: 'returns', name: 'Повернення і обмін', link: '#' },
];
const Navbar = () => {
  return (
    <nav className="main-menu">
      <ul className="menu-list">
        {navList.map((el) => (
          <li key={el.key} className="menu-item">
            <NavLink to={el.link}>{el.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
