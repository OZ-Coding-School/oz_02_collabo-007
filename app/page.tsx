import Navbar from '@/components/module/Navbar/Navbar';
import UserProfile from '@/components/module/UserProfile/UserProfile';
import type { UserData } from '@/@types/user';
import Alert from '@/components/core/Alert/Alert';
import { getMyData } from './_actions/getMyData';
import { Suspense } from 'react';
import HomeMyCompInfo from '@/components/organism/HomPage/HomeMyCompInfo/HomeMyCompInfo';
import HomeCompInfo from '@/components/organism/HomPage/HomeCompInfo/HomeCompInfo';
import CompListSkeleton from '@/components/core/Skeleton/CompListSkeleton';
import { MY_COMP_LIST } from '@/constants/competition';
import Link from 'next/link';
import Button from '@/components/core/Button/Button';
import UserHighlightRankingCard from '@/components/module/UserProfile/UserHighlightRankingCard/UserHighlightRankingCard';

const Home = async () => {
  const userData: UserData = await getMyData();

  return (
    <>
      <div className="relative flex h-full w-full flex-col">
        <UserProfile userData={userData && userData} loginBtn>
          <>
            {userData ? (
              <UserHighlightRankingCard userData={userData} />
            ) : (
              <Link href="/signin">
                <Button size="lg" label="로그인하러 가기" variant="primary" />
              </Link>
            )}
          </>
        </UserProfile>
        <main className="no-scrollbar flex w-full flex-1 flex-col gap-[32px] overflow-scroll bg-gray-10 p-[20px]">
          {userData && (
            <Suspense
              fallback={
                <div className="flex flex-col gap-[32px]">
                  {MY_COMP_LIST.map(({ title }, index) => (
                    <CompListSkeleton title={title} key={index} />
                  ))}
                </div>
              }
            >
              <HomeMyCompInfo />
            </Suspense>
          )}
          <Suspense fallback={<CompListSkeleton title="대회 정보" />}>
            <HomeCompInfo isUser={userData ? true : false} />
          </Suspense>
        </main>
        <Navbar />
      </div>
      <Alert />
    </>
  );
};

export default Home;
