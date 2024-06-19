import React from 'react';
import Link from 'next/link';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import { ClubSection, InfoSection } from '@/components/organism/ProfilePage';
import Avatar from '@/components/core/Avatar/Avatar';
import MemberSection from '@/components/module/MemberSection/MemberSection';
import type { TennisClubData } from '@/@types/club';
import { getClubData } from '@/app/_actions/getClubData';

const page = async ({ params }: { params: { id: string } }) => {
  const { club, coaches, teams, users }: TennisClubData = await getClubData(params.id);

  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="클럽 정보" backBtn />

      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[8px] overflow-scroll bg-gray-30">
        <div className="flex flex-col gap-[16px] bg-white px-[20px] py-[24px]">
          <InfoSection
            name={club.name}
            imageUrl={club.imageUrl}
            description={club.description}
          />
          <ClubSection address={club.address} phone={club.phone} />
        </div>

        <div className="flex w-full flex-1 flex-col gap-[40px] bg-white p-[20px]">
          <div className="flex flex-col gap-[12px]">
            <div className="text-headline-6">코치 정보</div>
            <div className="no-scrollbar flex w-full justify-around gap-[12px] overflow-y-scroll">
              {coaches.map(({ user }) => (
                <div key={user.id} className="w-[30%] max-w-[96px]">
                  <Avatar name={user.username} image={user.imageUrl} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <div className="text-headline-6">클럽 팀</div>
            <div className="no-scrollbar flex w-full justify-around gap-[12px] overflow-y-scroll">
              {teams.map(({ id, name, imageUrl }) => (
                <Link href={`/team/${id}`} key={id} className="w-[30%] max-w-[96px]">
                  <Avatar name={name} image={imageUrl} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col gap-[12px]">
            <div className="flex gap-[16px]">
              <div className="flex-1 text-headline-6">멤버</div>
              <Link
                href={`/club/${club.id}/member`}
                className="text-sub-headline-2 text-gray-60"
              >
                전체 멤버 보기
              </Link>
            </div>

            <div className="flex w-full flex-col">
              <MemberSection userData={users} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
