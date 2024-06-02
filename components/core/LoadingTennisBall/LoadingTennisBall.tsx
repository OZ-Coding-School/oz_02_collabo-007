import React from 'react';
import TennisIcon from '@/app/_asset/icons/tennis-ball.svg';

const LoadingTennisBall = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <TennisIcon className="tennis-loader" />
    </div>
  );
};

export default LoadingTennisBall;
