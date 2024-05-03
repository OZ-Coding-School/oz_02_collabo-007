'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import userIcon from '@/app/_asset/icons/user.svg';
import addIcon from '@/app/_asset/icons/add.svg';

const ProfileField = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [profileImages, setProfileImages] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);
    const selectedFiles: string[] = targetFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setProfileImages(() => [...selectedFiles]);
  };

  const handleDelete = () => {
    if (fileRef.current) fileRef.current.value = '';
    setProfileImages(() => []);
  };

  const handleClick = () => {
    fileRef?.current?.click();
  };

  return (
    <div className="relative h-[88px] w-[88px] rounded-full">
      <div
        className="h-full w-full cursor-pointer rounded-full border border-gray-30 bg-gray-20"
        onClick={handleClick}
      >
        {profileImages.length === 0 ? (
          <div className="h-full w-full p-[24px]">
            <Image src={userIcon} alt="user" width={40} height={40} />
          </div>
        ) : (
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={profileImages[0]}
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

      <div className="absolute bottom-0 right-0 rounded-full border border-white bg-primary-60 p-[4px]">
        {profileImages.length === 0 ? (
          <Image
            src={addIcon}
            alt="add"
            width={16}
            height={16}
            onClick={handleClick}
            className="cursor-pointer"
          />
        ) : (
          <Image
            src={addIcon}
            alt="add"
            width={16}
            height={16}
            className="rotate-45 cursor-pointer"
            onClick={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileField;
