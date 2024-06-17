import React from 'react';
import { UserData } from '@/@types/user';
import ProfileAvatar from '@/components/core/Avatar/ProfileAvatar';
import UserInfoCard from './UserInfoCard/UserInfoCard';

interface UserProfileProps {
  userData: UserData | null;
  loginBtn?: boolean;
  children?: React.ReactNode;
}

const UserProfile = async ({ userData, loginBtn, children }: UserProfileProps) => {
  return (
    <div className="w-full">
      <div
        className={`flex w-full flex-col gap-[24px] px-[20px] py-[24px] ${loginBtn && 'shadow-md'}`}
      >
        <div className="flex w-full items-center justify-between">
          <UserInfoCard userData={userData} loginBtn />
          <ProfileAvatar image={userData?.imageUrl} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default UserProfile;
