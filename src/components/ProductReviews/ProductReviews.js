import React from 'react';

const ProductReviews = () => {
  return (
    <div>
      <div>
        <h2 className="headline">Відгуки({})</h2>
        <span>Рейтинг:{}</span>
      </div>
      <div>
        <button>+ Написати відгук</button>
      </div>
    </div>
  );
};

export default ProductReviews;
