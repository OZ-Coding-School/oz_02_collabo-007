import Navbar from '@/components/module/Navbar/Navbar';
import UserProfile from '@/components/module/UserProfile/UserProfile';
import type { UserData } from '@/@types/user';
import Alert from '@/components/core/Alert/Alert';
import { getMyData } from './_actions/getMyData';
import { Suspense } from 'react';
import HomeMyCompInfo from '@/components/organism/HomPage/HomeMyCompInfo/HomeMyCompInfo';
import HomeCompInfo from '@/components/organism/HomPage/HomeCompInfo/HomeCompInfo';

const Home = async () => {
  const userData: UserData | null = await getMyData();

  return (
    <>
      <div className="flex h-full w-full flex-col overflow-hidden">
        <UserProfile userData={userData && userData} rankingPanel loginBtn />
        <main className="no-scrollbar flex w-full flex-1 flex-col gap-[32px] overflow-x-scroll bg-gray-10 p-[20px]">
          {/* TODO: 스켈레톤 추가 */}
          {userData && (
            <Suspense fallback={<div>loading...</div>}>
              <HomeMyCompInfo />
            </Suspense>
          )}
          <Suspense fallback={<div>loading...</div>}>
            <HomeCompInfo isUser={userData ? true : false} />
          </Suspense>
        </main>
        <div className="w-full">
          <Navbar />
        </div>
      </div>
      <Alert />
    </>
  );
};

export default Home;
