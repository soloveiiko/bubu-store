import React from 'react';
import { NavLink } from 'react-router-dom';

const navList = [
  { id: '1', name: 'Про нас', link: '#' },
  { id: '2', name: 'Контакти', link: '#' },
  { id: '3', name: 'Доставка і оплата', link: '#' },
  { id: '4', name: 'Повернення і обмін', link: '#' },
];
const Navbar = () => {
  return (
    <nav className="main-menu">
      <ul className="main-menu__list">
        {navList.map((el) => (
          <li key={el.id} className="main-menu__item">
            <NavLink to={el.link}>{el.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
