import React from 'react';
import { cart, comparison, favorite } from '../../assets';
const additionList = [
  { id: '1', name: 'Comparison', className: 'comparison', logo: comparison, counter: 0 },
  { id: '2', name: 'Favorite', className: 'favorite', logo: favorite, counter: 0 },
  { id: '3', name: 'Cart', className: 'cart', logo: cart, counter: 0 },
];
const UserActions = () => {
  return (
    <div className="user-action">
      {additionList.map((el) => (
        <div key={el.id} className={el.className}>
          <img src={el.logo} alt={el.name} />
          <span className="counter">{el.counter}</span>
        </div>
      ))}
    </div>
  );
};

export default UserActions;
