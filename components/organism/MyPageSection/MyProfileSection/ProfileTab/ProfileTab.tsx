import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

interface ProfileTabProps {
  name: string;
  gender: string;
  birth: string;
  tier: string;
  profile: StaticImageData;
}

const ProfileTab: FC<ProfileTabProps> = ({ name, gender, birth, tier, profile }) => {
  return (
    <div className="flex w-full gap-[16px]">
      <div className="relative h-[64px] w-[64px] rounded-full">
        <Image
          src={profile}
          alt="profile"
          fill
          sizes="64px"
          className="rounded-full object-cover"
          priority
        />
      </div>
      <div className="flex flex-1 flex-col items-start justify-center gap-[4px]">
        <div className="text-headline-4">{name}</div>
        <div className="text- text flex items-center gap-[4px] self-stretch text-body-2 text-gray-60">
          <div>{gender}</div>
          <div>{`\u00B7`}</div>
          <div>{birth}</div>
          <div>{`\u00B7`}</div>
          <div>{tier}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
