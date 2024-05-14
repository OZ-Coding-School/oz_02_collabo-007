import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import React from 'react';
import UserProfileCard from '@/components/module/UserProfileCard/UserProfileCard';
import InfoBanner from '@/components/organism/ProfilePage/InfoBanner/InfoBanner';
import ClubBanner from '@/components/organism/ProfilePage/ClubBanner/ClubBanner';
import Link from 'next/link';
import type { TennisClubData } from '@/@types/club';
import Avatar from '@/components/core/Avatar/Avatar';

const getClubData = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/club/${id}`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }: { params: { id: string } }) => {
  const { club, coaches, teams, users }: TennisClubData = await getClubData(params.id);

  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="클럽 정보" backBtn />

      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[8px] overflow-scroll bg-gray-30">
        <div className="flex flex-col gap-[16px] bg-white px-[20px] py-[24px]">
          <InfoBanner
            name={club.name}
            imageUrl={club.imageUrl?.imageUrl}
            description={club.description}
          />
          <ClubBanner address={club.address} phone={club.phone} />
        </div>

        <div className="flex w-full flex-1 flex-col gap-[40px] bg-white p-[20px]">
          <div className="flex flex-col gap-[12px]">
            <div className="text-headline-6">코치 정보</div>
            <div className="flex items-start gap-[24px] self-stretch">
              {coaches.map(({ user }) => (
                <Avatar
                  key={user.id}
                  name={user.username}
                  image={user.imageUrl?.imageUrl}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[12px]">
            <div className="text-headline-6">클럽 팀</div>
            <div className="flex items-start gap-[24px] self-stretch">
              {teams.map(({ id, name, imageUrl }) => (
                <Avatar key={id} name={name} image={imageUrl?.imageUrl} />
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
              <UserProfileCard userData={users} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
