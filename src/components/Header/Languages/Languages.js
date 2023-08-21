import React from 'react';

const langList = [
  { id: '1', name: 'Ukrainian', code: 'Укр' },
  { id: '2', name: 'English', code: 'Англ' },
];
const Languages = () => {
  return (
    <div className="languages">
      {langList.map((el) => (
        <button key={el.id} className="languages__item">
          {el.code}
        </button>
      ))}
    </div>
  );
};

export default Languages;
