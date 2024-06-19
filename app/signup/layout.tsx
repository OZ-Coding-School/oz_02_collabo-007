import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import { Suspense } from 'react';
import Loading from './loading';

export default function SignOutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="no-scrollbar relative flex h-full w-full flex-col overflow-scroll bg-white">
      <HeaderBar title="회원 가입" backBtn route="/signin/" />
      <div className="no-scrollbar h-full w-full flex-1 overflow-scroll">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </div>
  );
}
