import React from 'react';
import { Link } from 'react-router-dom';

const MoreActions = ({ title }) => {
  return (
    <Link to="#" className="more-actions">
      {title}
    </Link>
  );
};

export default MoreActions;
