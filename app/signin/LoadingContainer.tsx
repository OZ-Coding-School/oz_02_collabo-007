import LoadingSpinner from '@/components/core/LoadingSpinner/LoadingSpinner';
import React from 'react';

const LoadingContainer = () => {
  return (
    <div className="content absolute left-0 top-0 flex h-full w-full items-center justify-center">
      <div className="loader"></div>
    </div>
  );
};

export default LoadingContainer;
