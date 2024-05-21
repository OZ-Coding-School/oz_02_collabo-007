import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import UserIcon from '@/app/_asset/icons/user.svg';
import TeamIcon from '@/app/_asset/icons/team.svg';
import ClubIcon from '@/app/_asset/icons/group.svg';
import ChevronRightIcon from '@/app/_asset/icons/chevron-right.svg';
import Button from '@/components/core/Button/Button';

const UserProfile = ({ userData, loginBtn, rankingPanel }: any) => {
  return (
    <div className="w-full">
      <div
        className={`flex w-full flex-col gap-[24px] px-[20px] py-[24px] ${loginBtn && 'shadow-md'}`}
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-[8px]">
            {userData ? (
              <Link
                href="/mypage/edit/"
                className="flex items-center gap-[8px] text-headline-4"
              >
                {userData.username}
                {loginBtn && <ChevronRightIcon width={18} height={18} fill="#393939" />}
              </Link>
            ) : (
              <span className="text-headline-4 text-gray-60">
                대회를 신청하려면 <br /> 로그인 해주세요
              </span>
            )}
            {userData ? (
              <>
                <div className="flex gap-[8px]">
                  <ClubIcon width={20} height={20} fill="#393939" />
                  <span className="flex text-body-2 text-gray-80">
                    {userData.club ? userData.club.name : '현재 소속된 클럽이 없습니다'}
                  </span>
                </div>
                <div className="flex gap-[8px]">
                  <TeamIcon width={20} height={20} fill="#393939" />
                  <span className="flex text-body-2 text-gray-80">
                    {userData.team ? userData.team.name : '현재 소속된 팀이 없습니다'}
                  </span>
                </div>
              </>
            ) : null}
          </div>
          <div className="relative flex h-[80px] w-[80px] items-center justify-center overflow-hidden rounded-[50%] bg-gray-20">
            {userData?.imageUrl && (
              <Image
                src={userData.imageUrl}
                fill
                sizes="80px"
                alt="visible"
                style={{ borderRadius: '50%' }}
              />
            )}
            {!userData?.imageUrl ? (
              <UserIcon width={32} height={32} fill="#787878" />
            ) : null}
          </div>
        </div>
        {rankingPanel && userData ? (
          <div className="flex w-full items-center justify-center gap-[12px] rounded-[8px] border-[1px] border-primary-60 p-[12px] shadow-md">
            {userData.ranking ? (
              <>
                <span className="flex gap-[4px] text-sub-headline-2 text-gray-80">
                  {userData.ranking ? userData.ranking.single.name : null}
                  <span>·</span>
                  {userData.ranking ? userData.ranking.single.tier : null}
                </span>
                <span className="text-headline-6 text-primary-60">
                  {userData.ranking ? userData.ranking.single.rank : null}
                </span>
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
