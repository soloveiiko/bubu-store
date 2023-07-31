import React from 'react';
import { langList } from '../../utils/data';

const Languages = () => {
  return (
    <div className="languages">
      {langList.map((el) => (
        <button key={el.key} className="language-item">
          {el.code}
        </button>
      ))}
    </div>
  );
};

export default Languages;
