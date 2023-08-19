import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { review1, review2, review3 } from '../../../assets';

const Review = ({ comment }) => {
  const stars = comment.stars
    ? Array.from({ length: comment.stars }).map((_, index) => <AiFillStar key={index} />)
    : Array.from({ length: 5 }).map((_, index) => <AiFillStar key={index} />);
  const reviewImg = [review1, review2, review3, review1, review1];
  const [maxVisibleImages, setMaxVisibleImages] = useState(3);
  const [showAllImages, setShowAllImages] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 480 && windowWidth < 768) {
        setMaxVisibleImages(4);
      } else if (windowWidth >= 1000) {
        setMaxVisibleImages(4);
      } else {
        setMaxVisibleImages(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleImageDisplay = () => {
    setShowAllImages(true);
    setMaxVisibleImages(reviewImg.length);
  };
  const displayedImages = showAllImages ? reviewImg : reviewImg.slice(0, maxVisibleImages);

  return (
    <div className="comments-item">
      <div className="date">{comment.date ? comment.date : '11.08.23'}</div>
      <div className="user-review">
        <div className="name">{comment.name}</div>
        <div className="stars">{comment.stars ? comment.stars : stars}</div>
      </div>
      <div className="review-body">{comment.body}</div>
      <div className="images">
        {comment.images ? (
          comment.images.map((el, index) => <img key={index} src={el} alt="Comment" />)
        ) : (
          <>
            {displayedImages.map((img, index) => (
              <div key={index} className="img-container">
                <img src={img} alt="Review" />
              </div>
            ))}
            {reviewImg.length > maxVisibleImages && displayedImages.length < reviewImg.length && (
              <button className="show-all-images" onClick={toggleImageDisplay}>{`+${
                reviewImg.length - displayedImages.length
              }`}</button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Review;
