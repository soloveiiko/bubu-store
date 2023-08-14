import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const SendButton = ({ onClick, isAccent = false }) => {
  return (
    <>
      {isAccent ? (
        <button onClick={onClick} className="send-button-accent">
          <FiArrowRight />
        </button>
      ) : (
        <button onClick={onClick} className="send-button">
          <FiArrowRight />
        </button>
      )}
    </>
  );
};

export default SendButton;
