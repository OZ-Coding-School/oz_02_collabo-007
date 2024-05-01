'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import userIcon from '@/app/_asset/icons/user.svg';
import addIcon from '@/app/_asset/icons/add.svg';

const ProfileField = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [profileImages, setProfileImages] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent) => {
    const targetFile = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFile);
    const selectedFile: string = targetFilesArray.map((file) => {
      return URL.createObjectURL(file);
    })[0];
    setProfileImages(() => selectedFile);
  };

  const handleClick = () => {
    fileRef?.current?.click();
  };

  return (
    <div className="w-[88px] h-[88px] rounded-full relative">
      <div
        className="w-full h-full rounded-full bg-gray-20 border border-gray-30 cursor-pointer"
        onClick={handleClick}
      >
        {profileImages === null ? (
          <div className="w-full h-full p-[24px]">
            <Image src={userIcon} alt="user" width={40} height={40} />
          </div>
        ) : (
          <div className="w-full h-full overflow-hidden relative">
            <Image
              src={profileImages}
              alt="profileImg"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-full"
            />
          </div>
        )}
        <label htmlFor="profile"></label>
        <input
          type="file"
          name="profile"
          id="profile"
          ref={fileRef}
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      </div>

      <div className="absolute bottom-0 right-0 bg-primary-60 p-[4px] rounded-full border border-white">
        <Image src={addIcon} alt="add" width={16} height={16} />
      </div>
    </div>
  );
};

export default ProfileField;
