import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

const PrevArrow = ({ onClick }) => {
  return <FiArrowLeft className="prew-arrow" onClick={onClick} />;
};

export default PrevArrow;
