import React, { FC } from 'react';
import Image from 'next/image';
import xIcon from '@/app/_asset/icons/x.svg';
import searchIcon from '@/app/_asset/icons/search.svg';
import Input from '@/components/core/Input/Input';
import ClubItem from './ClubItem';
import tennisImg from '@/public/tennis.jpeg';
import HeaderBar from '../../../../core/HeaderBar/HeaderBar';

interface Props {
  handleCloseModal: () => void;
}

// test data
const CLUBS = [
  {
    id: 1,
    name: '라온 테니스',
    address: '서울시 서초구 강남대로 99길',
    image: tennisImg,
  },
  {
    id: 2,
    name: '라온 테니스',
    address: '서울시 서초구 강남대로 99길',
    image: tennisImg,
  },
  {
    id: 3,
    name: '라온 테니스',
    address: '서울시 서초구 강남대로 99길',
    image: tennisImg,
  },
];

const ClubContent: FC<Props> = ({ handleCloseModal }) => {
  const ModalActionBtn = () => {
    return (
      <Image
        src={xIcon}
        alt="x"
        width={24}
        height={24}
        onClick={() => handleCloseModal()}
        className="cursor-pointer"
      />
    );
  };

  return (
    <>
      <HeaderBar title="클럽 검색" actionBtn={<ModalActionBtn />} />

      <div className="relative flex flex-col gap-[10px] self-stretch bg-white px-[20px] py-[16px]">
        <Input name="clubSearch" placeholder="소속 클럽 검색" className="pl-[44px]" />

        <Image
          src={searchIcon}
          alt="search"
          width={20}
          height={20}
          className="absolute left-[32px] top-[26px]"
        />
      </div>
      <div className="flex flex-1 flex-col items-center gap-[16px] self-stretch px-[20px] py-[24px] text-body-2">
        {CLUBS.length === 0 ? (
          <span className="flex h-full w-full items-center justify-center text-body-2 text-gray-60">
            클럽을 검색해주세요
          </span>
        ) : (
          <>
            {CLUBS.map(({ id, name, address, image }) => (
              <ClubItem key={id} name={name} address={address} image={image} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ClubContent;
