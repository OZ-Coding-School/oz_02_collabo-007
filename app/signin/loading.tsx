import LoadingSpinner from '@/components/core/LoadingSpinner/LoadingSpinner';
import React from 'react';

const Loading = () => {
  return (
    <div className="content absolute left-0 top-0 flex h-full w-full items-center justify-center">
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
