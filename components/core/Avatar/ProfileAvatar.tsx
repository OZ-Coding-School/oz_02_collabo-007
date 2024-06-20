import Image from 'next/image';
import React from 'react';
import UserIcon from '@/app/_asset/icons/user.svg';

const ProfileAvatar = ({ image }: { image?: string | null }) => {
  return (
    <div className="relative flex h-[80px] w-[80px] items-center justify-center overflow-hidden rounded-full bg-gray-20">
      {image ? (
        <Image
          src={image}
          sizes="80px"
          alt="userProfileImage"
          fill
          className="object-cover"
          priority
        />
      ) : (
        <UserIcon width={32} height={32} fill="#787878" />
      )}
    </div>
  );
};

export default ProfileAvatar;
