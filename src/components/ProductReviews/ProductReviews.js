import React from 'react';
import Review from './Review/Review';
import { AiFillStar } from 'react-icons/ai';

const ProductReviews = ({ comments, visibleReviews, onShowMore }) => {
  return (
    <div className="product-reviews">
      {comments ? (
        <>
          <div className="comments-title">
            <h2 className="headline">Відгуки ({comments.length})</h2>
            <div className="rating">
              <span className="rating-title">Рейтинг: </span>{' '}
              <span className="rating-value">
                4.5 <AiFillStar />
              </span>
            </div>
          </div>
          <div className="write-review">
            <button>+ Написати відгук</button>
          </div>
          <div className="comments-list">
            {comments.slice(0, visibleReviews).map((el) => (
              <Review key={el.id} comment={el} />
            ))}
          </div>
          {comments.length > 2 && (
            <div className="more-details" onClick={onShowMore}>
              Показати більше
            </div>
          )}
        </>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
};

export default ProductReviews;
