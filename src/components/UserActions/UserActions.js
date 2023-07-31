import React from 'react';
import { additionList } from '../../utils/data';

const UserActions = () => {
  return (
    <div className="user-action">
      {additionList.map((el) => (
        <div key={el.key} className={el.className}>
          <img src={el.logo} alt={el.className} />
          <span>{el.counter}</span>
        </div>
      ))}
    </div>
  );
};

export default UserActions;
