import React from 'react';
import Review from './Review/Review';
import { AiFillStar } from 'react-icons/ai';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const ProductReviews = ({ comments, visibleReviews, onShowMore, handleOpenForm }) => {
  const getGap = () => {
    if (window.innerWidth >= 768) {
      return '30px';
    } else if (window.innerWidth >= 360) {
      return '16px';
    } else {
      return '0';
    }
  };

  return (
    <div className="product-reviews">
      {comments ? (
        <>
          <div className="product-reviews__title">
            <h2 className="product-reviews__headline headline">Відгуки ({comments.length})</h2>
            <div className="product-reviews__rating rating-reviews">
              <span className="rating-reviews__title">Рейтинг: </span>{' '}
              <span className="rating-reviews__value">
                4.5 <AiFillStar />
              </span>
            </div>
          </div>
          <div className="product-reviews__write write-review">
            <button className="write-review__btn accent-btn" type="button" onClick={handleOpenForm}>
              + Написати відгук
            </button>
          </div>
          <div className="product-reviews__list">
            <ResponsiveMasonry columnsCountBreakPoints={{ 360: 1, 767: 2, 1199: 3 }}>
              <Masonry className="product-reviews__item" gutter={getGap()}>
                {comments.slice(0, visibleReviews).map((el) => (
                  <Review key={el.id} comment={el} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
          {comments.length > 2 && (
            <div className="product-reviews__more-actions more-actions" onClick={onShowMore}>
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
