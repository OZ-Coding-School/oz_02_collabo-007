import Image from 'next/image';
import React from 'react';
import UserIcon from '@/app/_asset/icons/user.svg';
import { MATCH_TYPE } from '@/constants/competition';
import type { UserData } from '@/@types/user';

interface ProfileTabProps {
  userData: UserData;
}

const ProfileTab = ({ userData }: ProfileTabProps) => {
  const { imageUrl, username, gender, birth, tiers } = userData;

  return (
    <div className="flex w-full gap-[16px]">
      <div className="relative flex h-[64px] w-[64px] items-center justify-center rounded-full bg-gray-20">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="profile"
            fill
            sizes="64px"
            className="rounded-full object-cover"
            priority
          />
        ) : (
          <UserIcon width={32} height={32} fill="#787878" />
        )}
      </div>
      <div className="flex flex-1 flex-col items-start justify-center gap-[4px]">
        <div className="text-headline-4">{username}</div>
        <div className="text- text flex items-center gap-[4px] self-stretch text-body-2 text-gray-60">
          <div>
            {gender === 'male' && '남자'}
            {gender === 'female' && '여자'}
          </div>
          <div>{`\u00B7`}</div>
          <div>{birth}</div>
        </div>
        <div className="text- text flex items-center gap-[4px] self-stretch text-body-2 text-gray-60">
          {tiers && tiers.length !== 0 && (
            <div>
              {tiers
                .map(
                  ({ name, matchTypeDetail }) =>
                    `${MATCH_TYPE[matchTypeDetail.type]} ${name}`,
                )
                .join(' \u00B7 ')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
