import Button from '@/components/core/Button/Button';
import Image from 'next/image';
import visibleIcon from './_asset/icons/visible.svg';
import Navbar from '@/components/module/Navbar/Navbar';
import Link from 'next/link';
import chevronRightIcon from './_asset/icons/chevron-right.svg';
import userIcon from './_asset/icons/user.svg';
import teamIcon from './_asset/icons/team.svg';
import clubIcon from './_asset/icons/group.svg';

import { data } from './data';
import CompCard from '@/components/organism/CompCard/CompCard';
import CompList from '@/components/organism/CompList/CompList';

export default function Home() {
  // const user = null;
  const user = data.userInfo;

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      {user ? (
        <div className="w-full px-[20px] py-[24px] shadow-md">
          <div className="mb-[24px] flex w-full items-center justify-between">
            <div className="flex flex-col gap-2">
              <Link href="/" className="flex text-headline-4">
                {data.userInfo.name}
                <Image
                  src={chevronRightIcon}
                  width={18}
                  height={18}
                  className="ml-[8px]"
                  alt="chevron"
                />
              </Link>
              <div className="flex">
                <Image
                  src={clubIcon}
                  width={20}
                  height={20}
                  className="mr-[8px]"
                  alt="club"
                />
                <span className="flex text-body-2 text-gray-80">
                  {data.userInfo.club.name}
                </span>
              </div>

              <div className="flex">
                <Image
                  src={teamIcon}
                  width={20}
                  height={20}
                  className="mr-[8px]"
                  alt="team"
                />
                <span className="flex text-body-2 text-gray-80">
                  {data.userInfo.team.name}
                </span>
              </div>
            </div>
            <div className="item-center flex h-[80px] w-[80px] justify-center rounded-[50%] bg-gray-20">
              {data.userInfo.image !== null ? (
                <Image src="" width={80} height={80} alt="visible" />
              ) : (
                <Image src={userIcon} width={40} height={40} alt="user" />
              )}
            </div>
          </div>
          <div className="flex w-full items-center justify-center rounded-[8px] border-[1px] border-primary-60 p-[12px] shadow-md">
            <span className="mr-[12px] text-sub-headline-2 text-gray-80">
              {data.userInfo.ranking.single.name} · {data.userInfo.ranking.single.tier}
            </span>
            <span className="text-headline-6 text-primary-60">
              {data.userInfo.ranking.single.rank}
            </span>
          </div>
        </div>
      ) : (
        <div className="px-[20px] py-[24px]">
          <div className="mb-[24px] flex items-center justify-between">
            <div className="flex flex-col text-headline-4 text-gray-60">
              <span>대회를 신청하려면</span>
              <span>로그인 해주세요</span>
            </div>
            <div className="item-center flex h-[80px] w-[80px] justify-center rounded-[50%] bg-gray-20">
              <Image src={userIcon} width={40} height={40} alt="user" />
            </div>
          </div>
          <Button size="lg" label="로그인하러 가기" variant="primary" />
        </div>
      )}
      <main className="no-scrollbar flex w-full flex-1 flex-col gap-[32px] overflow-x-scroll bg-gray-10 p-[20px]">
        {user ? (
          <CompList
            title="참가 예정 대회"
            compStatus="진행 전"
            flexDirection={
              user && 'w-screen ml-[-20px] px-[20px] gap-[12px] overflow-y-scroll'
            }
          />
        ) : null}
        {user ? (
          <CompList
            title="최근 참가 대회"
            compStatus="종료"
            flexDirection={
              user && 'w-screen ml-[-20px] px-[20px] gap-[12px] overflow-y-scroll'
            }
          />
        ) : null}
        <CompList
          title="대회 정보"
          flexDirection={
            !user
              ? 'flex-col w-full gap-[16px]'
              : 'w-screen ml-[-20px] px-[20px] gap-[12px] overflow-y-scroll'
          }
        />
      </main>
      <div className="sticky bottom-0 w-full">
        <Navbar />
      </div>
    </div>
  );
}
