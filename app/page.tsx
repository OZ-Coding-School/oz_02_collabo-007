import Navbar from '@/components/module/Navbar/Navbar';

import { data } from './data';
import CompList from '@/components/organism/CompList/CompList';
import HomeUserProfile from '@/components/module/HomeUserProfile/HomeUserProfile';

export default function Home() {
  // const user = null;
  const user = data.userInfo;

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <HomeUserProfile userInfo={user} />
      <main className="no-scrollbar flex w-full flex-1 flex-col gap-[32px] overflow-x-scroll bg-gray-10 p-[20px]">
        {user ? (
          <CompList
            title="참가 예정 대회"
            compStatus="진행 전"
            flexDirection={
              user &&
              'w-[calc(100%+40px)] ml-[-20px] px-[20px] gap-[12px] overflow-y-scroll'
            }
          />
        ) : null}
        {user ? (
          <CompList
            title="최근 참가 대회"
            compStatus="종료"
            flexDirection={
              user &&
              'w-[calc(100%+40px)] ml-[-20px] px-[20px] gap-[12px] overflow-y-scroll'
            }
          />
        ) : null}
        <CompList
          title="대회 정보"
          flexDirection={
            !user
              ? 'flex-col w-full gap-[16px]'
              : 'w-[calc(100%+40px)] ml-[-20px] px-[20px] gap-[12px] overflow-y-scroll'
          }
        />
      </main>
      <div className="sticky bottom-0 w-full">
        <Navbar />
      </div>
    </div>
  );
}
