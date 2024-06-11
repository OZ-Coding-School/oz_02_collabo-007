import Link from 'next/link';
import React from 'react';

import Button from '@/components/core/Button/Button';
import { UserData } from '@/@types/user';
import ProfileAvatar from '@/components/core/Avatar/ProfileAvatar';
import UserInfoCard from './UserInfoCard/UserInfoCard';
import UserHighlightRankingCard from './UserHighlightRankingCard/UserHighlightRankingCard';

interface UserProfileProps {
  userData: UserData;
  loginBtn?: boolean;
  rankingPanel?: boolean;
}

const UserProfile = ({ userData, loginBtn, rankingPanel }: UserProfileProps) => {
  return (
    <div className="w-full">
      <div
        className={`flex w-full flex-col gap-[24px] px-[20px] py-[24px] ${loginBtn && 'shadow-md'}`}
      >
        <div className="flex w-full items-center justify-between">
          <UserInfoCard userData={userData} loginBtn />
          <ProfileAvatar image={userData?.imageUrl} />
        </div>
        <UserHighlightRankingCard rankingPanel={rankingPanel} userData={userData} />
        {!userData.id && loginBtn && (
          <Link href="/signin">
            <Button size="lg" label="로그인하러 가기" variant="primary" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
