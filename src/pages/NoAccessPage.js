import React from 'react';

const NoAccessPage = () => {
  return (
    <div className="error-page">
      <div className="error-page__container container">
        <h1 className="error-page__title">403 Error</h1>
        <h2 className="error-page__subtitle">No Access</h2>
      </div>
    </div>
  );
};

export default NoAccessPage;
