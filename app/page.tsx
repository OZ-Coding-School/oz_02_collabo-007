import Navbar from '@/components/module/Navbar/Navbar';
import CompList from '@/components/organism/CompList/CompList';
import HomeUserProfile from '@/components/module/HomeUserProfile/HomeUserProfile';
import { cookies } from 'next/headers';

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
  { title: '참가 예정 대회', compStatus: '진행 전', variant: 'flex' },
  { title: '최근 참가 대회', compStatus: '종료', variant: 'flex' },
];

const Home = async () => {
  const userData = await getUserData();

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <HomeUserProfile userInfo={userData} rankingPanel loginBtn />
      <main className="no-scrollbar flex w-full flex-1 flex-col gap-[32px] overflow-x-scroll bg-gray-10 p-[20px]">
        {HOME_COMP_LIST.map(({ title, compStatus, variant }) =>
          userData ? (
            <CompList title={title} compStatus={compStatus} variant={variant} />
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
