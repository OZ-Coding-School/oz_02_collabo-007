import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import React from 'react';

export default function SuccessLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="대회 신청 완료" backBtn />
      {children}
    </div>
  );
}
