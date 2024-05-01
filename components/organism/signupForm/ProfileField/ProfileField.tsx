import Image from 'next/image';
import React from 'react';
import userIcon from '@/app/_asset/icons/user.svg';
import addIcon from '@/app/_asset/icons/add.svg';

const ProfileField = () => {
  return (
    <div className="w-[88px] h-[88px] p-[24px] rounded-full bg-gray-20 border border-gray-30 relative">
      <Image src={userIcon} alt="user" width={40} height={40} />
      <div className="absolute bottom-0 right-0 bg-primary-60 p-[4px] rounded-full border border-white">
        <Image src={addIcon} alt="add" width={16} height={16} />
      </div>
    </div>
  );
};

export default ProfileField;
