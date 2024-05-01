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

export default function Home() {
  // const user = null;
  const user = data.userInfo;

  return (
    <div className="w-full">
      {user ? (
        <div className="w-full px-[20px] py-[24px] shadow-md">
          <div className="w-full flex justify-between items-center mb-[24px]">
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
            <div className="w-[80px] h-[80px] flex justify-center item-center rounded-[50%] bg-gray-20">
              {data.userInfo.image !== null ? (
                <Image src="" width={80} height={80} alt="visible" />
              ) : (
                <Image src={userIcon} width={40} height={40} alt="user" />
              )}
            </div>
          </div>
          <div className="w-full flex justify-center items-center border-[1px] rounded-[8px] border-primary-60 p-[12px] shadow-md">
            <span className="text-gray-80 text-sub-headline-2 mr-[12px]">
              {data.userInfo.ranking.single.name} · {data.userInfo.ranking.single.tier}
            </span>
            <span className="text-primary-60 text-headline-6">
              {data.userInfo.ranking.single.rank}
            </span>
          </div>
        </div>
      ) : (
        <div className="px-[20px] py-[24px]">
          <div className="flex justify-between mb-[24px] items-center">
            <div className="flex flex-col text-headline-4 text-gray-60">
              <span>대회를 신청하려면</span>
              <span>로그인 해주세요</span>
            </div>
            <div className="w-[80px] h-[80px] flex justify-center item-center rounded-[50%] bg-gray-20">
              <Image src={userIcon} width={40} height={40} alt="user" />
            </div>
          </div>
          <Button size="lg" label="로그인하러 가기" variant="primary" />
        </div>
      )}
      <main className="p-[20px] bg-gray-10">
        {user ? (
          <div className="mb-[32px]">
            <div className="flex justify-between items-center mb-[12px]">
              <span className="text-headline-5 text-gray-100">참가 예정 대회</span>
              <Link href="/#" className="sub-headline-2 text-gray-60">
                전체 목록 보기
              </Link>
            </div>
            <div className="w-screen flex ml-[-20px] pl-[20px] overflow-y-scroll">
              {data.myComp.myCompetition.map((comp) =>
                comp.status === '진행 중' ? (
                  <div className="p-[16px] bg-white rounded-[8px] shadow-md mr-[12px]">
                    <div className="flex mb-[16px]">
                      <div className="w-[88px] h-[88px] mr-[16px] rounded-[8px]">
                        <Image src={comp.image} width={18} height={18} alt="comp" />
                      </div>
                      <div className="w-[199px] flex flex-col gap-1 text-headline-6 text-gray-100">
                        <span>{comp.name}</span>
                        <div className="flex flex-col gap-1 text-body-3 text-gary-80">
                          <span>{comp.date}</span>
                          <span>
                            {comp.category} · {comp.tier}
                          </span>
                          <span>{comp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between p-[12px] rounded-[8px] bg-gray-20">
                      <span className="text-sub-headline-3 text-gray-80">
                        {comp.nextMatch.teammate[0].name} ·{' '}
                        {comp.nextMatch.teammate[1].name} vs{' '}
                        {comp.nextMatch.opponent[0].name} ·{' '}
                        {comp.nextMatch.opponent[1].name}
                      </span>
                      <span className="text-body-3 text-gray-60">
                        {comp.nextMatch.court}번 코트
                      </span>
                    </div>
                  </div>
                ) : null,
              )}
            </div>
          </div>
        ) : null}
        <div className="mb-[32px]">
          <div className="flex justify-between items-center mb-[12px]">
            <span className="text-headline-5 text-gray-100">대회 목록</span>
            <Link href="/#" className="sub-headline-2 text-gray-60">
              전체 목록 보기
            </Link>
          </div>
          <div
            className={user ? 'w-screen flex ml-[-20px] pl-[20px] overflow-y-scroll' : ''}
          >
            {data.myComp.myCompetition.map((comp) =>
              comp.status === '진행 중' ? (
                <div
                  className={
                    user
                      ? 'p-[16px] bg-white rounded-[8px] shadow-md mr-[12px]'
                      : 'p-[16px] bg-white rounded-[8px] shadow-md mb-[16px]'
                  }
                >
                  <div className="flex">
                    <div className="w-[88px] h-[88px] mr-[16px] rounded-[8px]">
                      <Image src={comp.image} width={18} height={18} alt="comp" />
                    </div>
                    <div className="w-[199px] flex flex-col gap-1 text-headline-6 text-gray-100">
                      <span>{comp.name}</span>
                      <div className="flex flex-col gap-1 text-body-3 text-gary-80">
                        <span>{comp.date}</span>
                        <span>
                          {comp.category} · {comp.tier}
                        </span>
                        <span>{comp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null,
            )}
          </div>
        </div>
      </main>
      <div className="w-full sticky bottom-0">
        <Navbar />
      </div>
    </div>
  );
}
