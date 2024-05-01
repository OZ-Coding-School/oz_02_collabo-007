import InputModule from '@/components/module/InputModule/InputModule';
import Image from 'next/image';
import React from 'react';
import searchIcon from '@/app/_asset/icons/search.svg';

const ClubField = () => {
  return (
    <div className="w-full relative">
      <InputModule
        label="소속 클럽 검색"
        placeholder="소속 클럽 검색"
        type="text"
        name="club"
        style={{ paddingLeft: '44px' }}
      />

      <Image
        src={searchIcon}
        alt="search"
        width={20}
        height={20}
        className="absolute top-[38px] left-[12px]"
      />
    </div>
  );
};

export default ClubField;
