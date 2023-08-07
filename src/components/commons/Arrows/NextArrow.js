import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const NextArrow = ({ onClick }) => {
  return <FiArrowRight className="next-arrow" onClick={onClick} />;
};

export default NextArrow;
