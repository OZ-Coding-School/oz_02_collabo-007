import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import UserProfileCard from '@/components/module/UserProfileCard/UserProfileCard';
import React from 'react';
import { ClubTeamUser } from '@/@types/user';

export const getTeamMember = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/team/${id}/userlist`, {
    next: { revalidate: 3600 },
  }).then((res) => res.json());
  return res;
};

const page = async ({ params }: { params: { id: string } }) => {
  const teamMemberData: ClubTeamUser[] = await getTeamMember(params.id);

  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="팀 멤버" backBtn />
      <div className="flex w-full flex-1 flex-col px-[20px] py-[16px]">
        <UserProfileCard userData={teamMemberData} />
      </div>
    </div>
  );
};

export default page;
