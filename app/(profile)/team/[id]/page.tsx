import React from 'react';
import Link from 'next/link';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import { InfoSection, TeamSection } from '@/components/organism/ProfilePage';
import MemberSection from '@/components/module/MemberSection/MemberSection';
import MatchResultCard from '@/components/module/MatchResultCard/MatchResultCard';
import type { TennisTeamData } from '@/@types/team';

const getTeamData = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/team/${id}`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }: { params: { id: string } }) => {
  const { team, users }: TennisTeamData = await getTeamData(params.id);

  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="팀 정보" backBtn />

      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[8px] overflow-scroll bg-gray-30">
        <div className="flex flex-col gap-[16px] bg-white px-[20px] py-[24px]">
          <InfoSection
            name={team.name}
            imageUrl={team.imageUrl?.imageUrl}
            description={team.description}
          />
          <TeamSection rank={32} win={32} lose={15} />
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
              <MemberSection userData={users} />
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
