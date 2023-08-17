import React from 'react';
import Review from './Review/Review';
import { AiFillStar } from 'react-icons/ai';

const ProductReviews = ({ comments, visibleReviews, onShowMore }) => {
  return (
    <div className="product-reviews">
      {comments ? (
        <>
          <div className="comments-title">
            <h2 className="headline">Відгуки({comments.length})</h2>
            <span className="rating">
              Рейтинг: 4.5 <AiFillStar />
            </span>
          </div>
          <div className="write-review">
            <button>+ Написати відгук</button>
          </div>
          <div className="comments-list">
            {comments.slice(0, visibleReviews).map((el) => (
              <Review key={el.id} comment={el} />
            ))}
            {comments.length > 6 && <button onClick={onShowMore}>Показати більше</button>}
          </div>
        </>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
};

export default ProductReviews;
