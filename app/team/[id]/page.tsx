import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import React from 'react';
import tennisImg from '@/public/tennis.jpeg';
import UserProfileCard from '@/components/module/UserProfileCard/UserProfileCard';
import MemberCard from '@/components/organism/ProfilePage/MemberCard/MemberCard';
import InfoBanner from '@/components/organism/ProfilePage/InfoBanner/InfoBanner';
import ClubBanner from '@/components/organism/ProfilePage/ClubBanner/ClubBanner';
import Link from 'next/link';
import MatchResultCard from '@/components/module/MatchResultCard/MatchResultCard';
import TeamBanner from '@/components/organism/ProfilePage/TeamBanner/TeamBanner';

const page = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="팀 정보" backBtn />

      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[8px] overflow-scroll bg-gray-30">
        <div className="flex flex-col gap-[16px] bg-white px-[20px] py-[24px]">
          <InfoBanner
            name="라온테니스 A"
            image={tennisImg}
            description="라온테니스 A는 가장 높은 실력을 가진 팀입니다."
          />
          <TeamBanner rank={32} win={32} lose={15} />
        </div>

        <div className="flex w-full flex-1 flex-col gap-[40px] bg-white p-[20px]">
          <div className="flex w-full flex-col gap-[12px]">
            <div className="flex gap-[16px]">
              <div className="flex-1 text-headline-6">멤버</div>
              <Link
                href={`/team/${1}/member`}
                className="text-sub-headline-2 text-gray-60"
              >
                전체 멤버 보기
              </Link>
            </div>

            <div className="flex w-full flex-col">
              <UserProfileCard data={TEST_DATA2} />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[12px]">
            <div className="flex gap-[16px]">
              <div className="flex-1 text-headline-6">최근 전적</div>
              <Link href={`#`} className="text-sub-headline-2 text-gray-60">
                전체 전적 보기
              </Link>
            </div>
            <div className="flex flex-col gap-[16px]">
              {MATCHES_DATA.map((match, index) => (
                <MatchResultCard match={match} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const MATCHES_DATA = [
  {
    court: 1,
    winner: {
      users: [{ name: '김형섭' }, { name: '이인호' }],
      scores: ['6', '6', '-'],
    },
    loser: {
      users: [{ name: '박성진' }, { name: '강민석' }],
      scores: ['3', '2', '-'],
    },
  },
  {
    court: 1,
    winner: {
      users: [{ name: '김형섭' }, { name: '이인호' }],
      scores: ['6', '6', '-'],
    },
    loser: {
      users: [{ name: '박성진' }, { name: '강민석' }],
      scores: ['3', '2', '-'],
    },
  },
  {
    court: 1,
    winner: {
      users: [{ name: '김형섭' }, { name: '이인호' }],
      scores: ['6', '6', '-'],
    },
    loser: {
      users: [{ name: '박성진' }, { name: '강민석' }],
      scores: ['3', '2', '-'],
    },
  },
  {
    court: 1,
    winner: {
      users: [{ name: '김형섭' }, { name: '이인호' }],
      scores: ['6', '6', '-'],
    },
    loser: {
      users: [{ name: '박성진' }, { name: '강민석' }],
      scores: ['3', '2', '-'],
    },
  },
];

const TEST_DATA2 = [
  { name: '이인호', rank: 1, score: '3,485', team: '라온테니스 A', image: tennisImg },
  { name: '이인호', rank: 2, score: '3,485', team: '라온테니스 A', image: tennisImg },
  { name: '이인호', rank: 3, score: '3,485', team: '라온테니스 A', image: tennisImg },
];
