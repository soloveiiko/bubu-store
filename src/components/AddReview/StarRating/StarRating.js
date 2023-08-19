import React, { useState } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="add-review__star-rating star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`star-rating__btn ${index <= (hover || rating) ? 'on' : 'off'}`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {index <= (hover || rating) ? <IoIosStar /> : <IoIosStarOutline />}
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
