import React from 'react';
import Review from './Review/Review';
import { AiFillStar } from 'react-icons/ai';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const ProductReviews = ({ comments, visibleReviews, onShowMore }) => {
  const breakpoints = { mobile: 0, tablet: 768, desktop: 1200 };

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
            <ResponsiveMasonry columnsCountBreakPoints={{ 360: 1, 767: 2, 1199: 3 }}>
              <Masonry className="comments-list-item">
                {comments.slice(0, visibleReviews).map((el) => (
                  <Review key={el.id} comment={el} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
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
