import React from 'react';

const Review = ({ comment }) => {
  console.log(comment);
  return (
    <div>
      <div className="date">{comment.date ? comment.date : '11.08.23'}</div>
      <div className="name">{comment.name}</div>
      <div className="stars">{comment.stars ? comment.stars : '5'}</div>
      <div className="review-body">{comment.body}</div>
      <div className="images">
        {comment.images ? (
          comment.images.map((el, index) => <img key={index} src={el} alt="Comment" />)
        ) : (
          <>
            <img src="" alt="" />
            <img src="" alt="" />
          </>
        )}
      </div>
    </div>
  );
};

export default Review;
