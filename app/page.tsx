import Navbar from '@/components/module/Navbar/Navbar';
import CompList from '@/components/module/CompList/CompList';
import { cookies } from 'next/headers';
import UserProfile from '@/components/module/UserProfile/UserProfile';
import type { UserData } from '@/@types/user';

export const getUserData = async () => {
  'use server';

  const cookie = cookies();
  const user = cookie.get('access')!;
  if (user) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/myprofile`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.value}`,
        'Content-type': 'application/json',
      },
      cache: 'force-cache',
      next: { tags: ['userData'] },
    }).then((res) => res.json());

    return res;
  }
};

const HOME_COMP_LIST = [
  { title: '참가 예정 대회', compStatus: '진행 전' },
  { title: '최근 참가 대회', compStatus: '종료' },
];

const Home = async () => {
  const userData: UserData = await getUserData();

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <UserProfile userData={userData} rankingPanel loginBtn />
      <main className="no-scrollbar flex w-full flex-1 flex-col gap-[32px] overflow-x-scroll bg-gray-10 p-[20px]">
        {HOME_COMP_LIST.map(({ title, compStatus }, index) =>
          userData ? (
            <CompList key={index} title={title} compStatus={compStatus} variant="flex" />
          ) : null,
        )}
        <CompList title="대회 정보" variant={userData ? 'flex' : 'flexCol'} />
      </main>
      <div className="sticky bottom-0 w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
