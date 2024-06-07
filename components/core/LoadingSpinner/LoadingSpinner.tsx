import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="content absolute left-0 top-0 flex h-full w-full items-center justify-center">
      <div className="loader"></div>
    </div>
  );
};

export default LoadingSpinner;
