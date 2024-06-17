import React from 'react';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import type { ClubTeamUser } from '@/@types/user';
import MemberSection from '@/components/module/MemberSection/MemberSection';
import { getClubMember } from '@/app/_actions/getClubMember';

const page = async ({ params }: { params: { id: string } }) => {
  const clubMemberData: ClubTeamUser[] = await getClubMember(params.id);

  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="클럽 멤버" backBtn />
      <div className="no-scrollbar flex w-full flex-1 flex-col overflow-scroll px-[20px] py-[16px]">
        <MemberSection userData={clubMemberData} />
      </div>
    </div>
  );
};

export default page;
