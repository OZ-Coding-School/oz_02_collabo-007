'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import UserIcon from '@/app/_asset/icons/user.svg';
import AddIcon from '@/app/_asset/icons/add.svg';

const ProfileField = ({ currentImg = [] }: { currentImg?: string[] }) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [profileImages, setProfileImages] = useState<string[]>(currentImg);
  const [imageChange, setImageChange] = useState<'true' | 'false'>('true');

  const handleChange = (e: React.ChangeEvent) => {
    const targetFiles = (e.target as HTMLInputElement).files as FileList;
    const targetFilesArray = Array.from(targetFiles);
    const selectedFiles: string[] = targetFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setProfileImages(() => [...selectedFiles]);
    setImageChange(() => 'true');
  };

  const handleDelete = () => {
    if (fileRef.current) fileRef.current.value = '';
    setProfileImages(() => []);
    setImageChange(() => 'true');
  };

  const handleClick = () => {
    fileRef?.current?.click();
  };

  useEffect(() => {
    if (currentImg.length === 0) return;

    setImageChange(() => 'false');
  }, [currentImg.length]);

  return (
    <div className="relative h-[88px] w-[88px] rounded-full">
      <div
        className="h-full w-full cursor-pointer rounded-full border border-gray-30 bg-gray-20"
        onClick={handleClick}
      >
        {profileImages.length === 0 ? (
          <div className="h-full w-full p-[24px]">
            <UserIcon width={40} height={40} fill="#787878" />
          </div>
        ) : (
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={profileImages[0]}
              alt="profileImg"
              fill
              sizes="88px"
              className="rounded-full object-cover"
              priority
            />
          </div>
        )}
        <label htmlFor="imageFile"></label>
        <input
          type="file"
          name="imageFile"
          id="imageFile"
          ref={fileRef}
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
        <label htmlFor="imageChange"></label>
        <input
          type="text"
          id="imageChange"
          name="imageChange"
          value={imageChange}
          className="hidden"
          onChange={(e) => e.target.value}
        />
      </div>

      <div className="absolute bottom-0 right-0 rounded-full border border-white bg-primary-60 p-[4px]">
        {profileImages.length === 0 ? (
          <AddIcon
            width={16}
            height={16}
            onClick={handleClick}
            className="cursor-pointer"
            fill="#fff"
          />
        ) : (
          <AddIcon
            width={16}
            height={16}
            onClick={handleDelete}
            className="rotate-45 cursor-pointer"
            fill="#fff"
          />
        )}
      </div>
    </div>
  );
};

export default ProfileField;
