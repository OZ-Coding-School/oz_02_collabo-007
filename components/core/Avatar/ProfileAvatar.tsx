import Image from 'next/image';
import React from 'react';
import UserIcon from '@/app/_asset/icons/user.svg';

interface ProfileAvatarProps {
  image: string | null;
}

const ProfileAvatar = ({ image }: ProfileAvatarProps) => {
  return (
    <div className="relative flex h-[80px] w-[80px] items-center justify-center overflow-hidden rounded-[50%] bg-gray-20">
      {image ? (
        <Image
          src={image}
          fill
          sizes="80px"
          alt="visible"
          style={{ borderRadius: '50%' }}
        />
      ) : (
        <UserIcon width={32} height={32} fill="#787878" />
      )}
    </div>
  );
};

export default ProfileAvatar;
