import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

const PrevArrow = ({ onClick }) => {
  return <FiArrowLeft className="myprev-arrow" onClick={onClick} />;
};

export default PrevArrow;
