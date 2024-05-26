import Link from 'next/link';
import React from 'react';

import Button from '@/components/core/Button/Button';
import { UserData } from '@/@types/user';
import ProfileAvatar from '@/components/core/Avatar/ProfileAvatar';
import UserInfoCard from './UserInfoCard/UserInfoCard';

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
        {rankingPanel && userData ? (
          <div className="flex w-full items-center justify-center gap-[12px] rounded-[8px] border-[1px] border-primary-60 p-[12px] shadow-md">
            {userData.ranking ? (
              <>
                {/* <span className="flex gap-[4px] text-sub-headline-2 text-gray-80">
                  {userData.ranking ? userData.ranking.single.name : null}
                  <span>·</span>
                  {userData.ranking ? userData.ranking.single.tier : null}
                </span>
                <span className="text-headline-6 text-primary-60">
                  {userData.ranking ? userData.ranking.single.rank : null}
                </span> */}
              </>
            ) : (
              <span className="text-sub-headline-2 text-primary-60">
                현재 등록된 대표 랭킹이 없습니다.
              </span>
            )}
          </div>
        ) : null}
        {!userData && loginBtn && (
          <Link href="/signin">
            <Button size="lg" label="로그인하러 가기" variant="primary" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
