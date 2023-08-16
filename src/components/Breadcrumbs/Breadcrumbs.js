import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ catalogName, catalogId, isProduct = false }) => {
  return (
    <div className="breadcrumbs">
      {isProduct ? (
        <>
          <Link to="/">Головна ></Link>
          <Link to={`/catalog/${catalogId}`}>{catalogName} ></Link>
        </>
      ) : (
        <Link to="/">Головна ></Link>
      )}
    </div>
  );
};

export default Breadcrumbs;
