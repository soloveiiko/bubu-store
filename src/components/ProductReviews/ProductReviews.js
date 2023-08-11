import React from 'react';
import Review from './Review/Review';

const ProductReviews = ({ comments, visibleReviews, onShowMore }) => {
  return (
    <>
      {comments ? (
        <div>
          <div>
            <h2 className="headline">Відгуки({})</h2>
            <span>Рейтинг:{}</span>
          </div>
          <div>
            <button>+ Написати відгук</button>
          </div>
          <div>
            {comments.slice(0, visibleReviews).map((el) => (
              <Review key={el.id} comment={el} />
            ))}
          </div>
          {comments.length > 6 && <button onClick={onShowMore}>Показати більше</button>}
        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </>
  );
};

export default ProductReviews;
