import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';
import UserIcon from '@/app/_asset/icons/user.svg';

interface ProfileTabProps {
  name: string;
  gender: string;
  birth: number;
  tier: string | null;
  imageUrl: string | null | undefined;
}

const ProfileTab: FC<ProfileTabProps> = ({ name, gender, birth, tier, imageUrl }) => {
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
        <div className="text-headline-4">{name}</div>
        <div className="text- text flex items-center gap-[4px] self-stretch text-body-2 text-gray-60">
          <div>
            {gender === 'male' && '남자'}
            {gender === 'female' && '여자'}
          </div>
          <div>{`\u00B7`}</div>
          <div>{birth}</div>
          <div>{`\u00B7`}</div>
          <div>{tier ? tier : '-'}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
