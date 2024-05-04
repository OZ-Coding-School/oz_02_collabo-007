'use client';

import React from 'react';

const SignoutTab = () => {
  // sign out
  const handleSignout = () => {};

  return (
    <div
      className="flex cursor-pointer items-center gap-[16px] self-stretch px-[24px] py-[16px] text-error-60"
      onClick={handleSignout}
    >
      <span className="flex-1">로그아웃</span>
    </div>
  );
};

export default SignoutTab;
