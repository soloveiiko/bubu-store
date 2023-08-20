import React from 'react';

const ShowMore = ({ onClick }) => {
  return (
    <button className="show-more white-btn" onClick={() => onClick()}>
      Показати ще
    </button>
  );
};

export default ShowMore;
