import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import { Suspense } from 'react';
import Loading from './loading';

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="대회 신청" backBtn />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
