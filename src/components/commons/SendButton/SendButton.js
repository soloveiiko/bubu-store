import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const SendButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="send-button">
      <FiArrowRight />
    </button>
  );
};

export default SendButton;
