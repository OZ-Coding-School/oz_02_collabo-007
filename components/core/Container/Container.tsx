'use client';

import React, { useEffect } from 'react';

const Container = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        '--vh',
        `${window.innerHeight * 0.01}px`,
      );
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return (
    <div
      className="no-scrollbar box-border h-screen w-screen bg-gray-40"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {children}
    </div>
  );
};

export default Container;
