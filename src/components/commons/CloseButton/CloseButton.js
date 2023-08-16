import React from 'react';

const CloseButton = ({ onClick, isAccent = false }) => {
  return (
    <>
      {isAccent ? (
        <button className="close-toggle close-toggle-accent" onClick={onClick}>
          &#9587;
        </button>
      ) : (
        <button className="close-toggle close-toggle-white" onClick={onClick}>
          &#9587;
        </button>
      )}
    </>
  );
};

export default CloseButton;
