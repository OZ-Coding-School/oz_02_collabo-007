import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import UserIcon from '@/app/_asset/icons/user.svg';
import TeamIcon from '@/app/_asset/icons/team.svg';
import ClubIcon from '@/app/_asset/icons/group.svg';
import ChevronRightIcon from '@/app/_asset/icons/chevron-right.svg';
import Button from '@/components/core/Button/Button';

const HomeUserProfile = ({ userInfo }: any) => {
  //   const userProfileImage = userInfo.image;
  //   const userProfileImage = null;

  return (
    <div>
      <div className="flex w-full flex-col gap-[24px] px-[20px] py-[24px] shadow-md">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-[8px] text-headline-4">
            {userInfo ? (
              <Link href="/" className="flex gap-[8px]">
                {userInfo.name}
                <ChevronRightIcon width={18} height={18} fill="#393939" />
              </Link>
            ) : (
              <span className="text-gray-60">
                대회를 신청하려면 <br /> 로그인 해주세요
              </span>
            )}
            {userInfo ? (
              <>
                <div className="flex gap-[8px]">
                  <ClubIcon width={20} height={20} fill="#393939" />
                  <span className="flex text-body-2 text-gray-80">
                    {userInfo.club.name}
                  </span>
                </div>
                <div className="flex gap-[8px]">
                  <TeamIcon width={20} height={20} fill="#393939" />
                  <span className="flex text-body-2 text-gray-80">
                    {userInfo.team.name}
                  </span>
                </div>
              </>
            ) : null}
          </div>
          <div className="item-center flex h-[80px] w-[80px] justify-center rounded-[50%] bg-gray-20">
            {userInfo && userInfo.image && (
              <Image
                src={userInfo.image}
                width={80}
                height={80}
                alt="visible"
                style={{ borderRadius: '50%' }}
              />
            )}
            {!userInfo || !userInfo.image ? (
              <UserIcon width={32} height={32} fill="#393939" />
            ) : null}
          </div>
        </div>
        {userInfo ? (
          <div className="flex w-full items-center justify-center gap-[12px] rounded-[8px] border-[1px] border-primary-60 p-[12px] shadow-md">
            <span className="flex gap-[4px] text-sub-headline-2 text-gray-80">
              {userInfo.ranking.single.name}
              <span>·</span>
              {userInfo.ranking.single.tier}
            </span>
            <span className="text-headline-6 text-primary-60">
              {userInfo.ranking.single.rank}
            </span>
          </div>
        ) : (
          <Link href="/signin">
            <Button size="lg" label="로그인하러 가기" variant="primary" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomeUserProfile;
