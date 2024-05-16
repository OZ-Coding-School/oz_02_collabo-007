import React from 'react';
import ProfileTab from './ProfileTab/ProfileTab';
import ClubTab from './ClubTab/ClubTab';
import Button from '@/components/core/Button/Button';
import Link from 'next/link';
import { UserInfo } from '@/@types/user';

interface MyProfileCardProps {
  userData: UserInfo;
}

const MyProfileCard = ({ userData }: MyProfileCardProps) => {
  const { username, gender, birth, tier, imageUrl, club, team } = userData;

  return (
    <div className="flex flex-col items-start gap-[24px] self-stretch bg-white px-[20px] py-[24px]">
      <ProfileTab
        name={username}
        birth={birth}
        gender={gender}
        imageUrl={imageUrl?.imageUrl}
        tier={tier}
      />

      <ClubTab club={club} team={team} />

      <Link href={'/mypage/edit'} className="w-full">
        <Button colors="gray" label="프로필 수정" variant="secondary" size={'md'} />
      </Link>
    </div>
  );
};

export default MyProfileCard;
