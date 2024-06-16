import React from 'react';
import ProfileTab from './ProfileTab/ProfileTab';
import ClubTab from './ClubTab/ClubTab';
import Button from '@/components/core/Button/Button';
import Link from 'next/link';
import type { UserData } from '@/@types/user';

interface MyProfileCardProps {
  userData: UserData;
}

const MyProfileCard = ({ userData }: MyProfileCardProps) => {
  const { club, team } = userData;

  return (
    <div className="flex flex-col items-start gap-[24px] self-stretch bg-white px-[20px] py-[24px]">
      <ProfileTab userData={userData} />

      <ClubTab club={club} team={team} />

      <Link href={'/mypage/edit'} className="w-full">
        <Button colors="gray" label="프로필 수정" variant="secondary" size={'md'} />
      </Link>
    </div>
  );
};

export default MyProfileCard;
