import Navbar from '@/components/module/Navbar/Navbar';
import UserProfile from '@/components/module/UserProfile/UserProfile';
import type { UserData } from '@/@types/user';
import Alert from '@/components/core/Alert/Alert';
import CompListSection from '@/components/module/CompListSection/CompListSection';
import { getMyData } from './_actions/getMyData';
import LoadingSpinner from '@/components/core/LoadingSpinner/LoadingSpinner';
import LoadingContainer from './signin/LoadingContainer';

const HOME_COMP_LIST = [
  { title: '참가 예정 대회', compStatus: '진행 전' },
  { title: '최근 참가 대회', compStatus: '종료' },
];

const Home = async () => {
  const userData: UserData = await getMyData();

  return (
    <>
      <div className="flex h-full w-full flex-col overflow-hidden">
        <UserProfile userData={userData} rankingPanel loginBtn />
        <main className="no-scrollbar flex w-full flex-1 flex-col gap-[32px] overflow-x-scroll bg-gray-10 p-[20px]">
          {userData &&
            HOME_COMP_LIST.map(({ title, compStatus }, index) => (
              <CompListSection
                key={index}
                title={title}
                compStatus={compStatus}
                variant="flex"
              />
            ))}
          <CompListSection title="대회 정보" variant={userData ? 'flex' : 'flexCol'} />
        </main>
        <div className="sticky bottom-0 w-full">
          <Navbar />
        </div>
      </div>
      <Alert />
    </>
  );
};

export default Home;
