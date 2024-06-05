import LoadingSpinner from '@/components/core/LoadingSpinner/LoadingSpinner';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white opacity-30">
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
