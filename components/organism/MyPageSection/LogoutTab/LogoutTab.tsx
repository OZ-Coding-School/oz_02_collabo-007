'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const LogoutTab = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout/`, {
      method: 'POST',
    });

    if (!res.ok) {
      console.log(res);
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    console.log(data);

    window.localStorage.removeItem('access-token');
    router.push('/signin');
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-[16px] self-stretch px-[24px] py-[16px] text-error-60"
      onClick={handleLogout}
    >
      <span className="flex-1">로그아웃</span>
    </div>
  );
};

export default LogoutTab;
