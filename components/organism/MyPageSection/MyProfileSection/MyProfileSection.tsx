import React from 'react';
import profileImg from '@/public/tennis.jpeg';
import ProfileTab from './ProfileTab/ProfileTab';
import ClubTab from './ClubTab/ClubTab';
import Button from '@/components/core/Button/Button';
import Link from 'next/link';

// TEST
const TEST_DATA = {
  name: '김형섭',
  gender: '남자',
  birth: '1993',
  tier: '개나리부',
  profile: profileImg,
  club: '라온테니스',
  team: '초보 A',
};

const MyProfileSection = () => {
  const { name, gender, birth, tier, profile, club, team } = TEST_DATA;

  return (
    <div className="flex flex-col items-start gap-[24px] self-stretch bg-white px-[20px] py-[24px]">
      <ProfileTab
        name={name}
        birth={birth}
        gender={gender}
        profile={profile}
        tier={tier}
      />

      <ClubTab club={club} team={team} />

      <Link href={'/mypage/edit'} className="w-full">
        <Button colors="gray" label="프로필 수정" variant="secondary" size={'md'} />
      </Link>
    </div>
  );
};

export default MyProfileSection;
