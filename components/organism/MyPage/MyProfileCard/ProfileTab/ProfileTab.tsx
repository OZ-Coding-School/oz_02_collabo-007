import Image from 'next/image';
import React from 'react';
import UserIcon from '@/app/_asset/icons/user.svg';
import { MATCH_TYPE } from '@/constants/competition';
import type { UserData } from '@/@types/user';
import ChevronRightIcon from '@/app/_asset/icons/chevron-right.svg';
import Link from 'next/link';
import { MatchTypeKey } from '@/@types/competition';

interface ProfileTabProps {
  userData: UserData;
}

const ProfileTab = ({ userData }: ProfileTabProps) => {
  const { id, imageUrl, username, gender, birth, tiers } = userData;

  return (
    <div className="flex w-full gap-[16px]">
      <div className="relative flex h-[64px] w-[64px] items-center justify-center rounded-full bg-gray-20">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="profile"
            sizes="64px"
            fill
            className="rounded-full object-cover"
            priority
          />
        ) : (
          <UserIcon width={32} height={32} fill="#787878" />
        )}
      </div>
      <div className="flex flex-1 flex-col items-start justify-center gap-[4px]">
        <Link
          href={`/user/${id}/`}
          className="flex items-center gap-[8px] text-headline-4"
        >
          {username}
          <ChevronRightIcon width={18} height={18} fill="#393939" />
        </Link>
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
                  ({
                    name,
                    matchTypeDetail,
                  }: {
                    name: string;
                    matchTypeDetail: { type: MatchTypeKey };
                  }) => `${MATCH_TYPE[matchTypeDetail.type]} ${name}`,
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
