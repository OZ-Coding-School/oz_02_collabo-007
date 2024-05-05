import Button from '@/components/core/Button/Button';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import Image from 'next/image';
import React from 'react';
import testImg from '@/public/tennis.jpeg';
import calendarIcon from '@/app/_asset/icons/calendar.svg';
import flagIcon from '@/app/_asset/icons/flag.svg';
import mapPinIcon from '@/app/_asset/icons/map-pin.svg';
import mapIcon from '@/app/_asset/icons/map.svg';
import Link from 'next/link';
import chevronRightIcon from '@/app/_asset/icons/chevron-right.svg';

const page = ({ params }: { params: { id: number } }) => {
  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="대회 상세 정보" backBtn />

      <div className="relative h-[200px] w-full">
        <Image
          src={testImg}
          alt="compImg"
          fill
          sizes="200px"
          className="h-full w-full object-cover "
        />
      </div>

      <div className="no-scrollbar flex flex-1 flex-col items-start overflow-scroll px-[20px] py-[24px]">
        <div className="flex w-full flex-1 flex-col gap-[24px]">
          <div className="flex w-full flex-col gap-[16px]">
            <div className="text-headline-3">챔피언스리그</div>
            <div className="flex flex-col gap-[10px] text-body-2 text-gray-80">
              <div className="flex gap-[8px]">
                <Image src={calendarIcon} alt="calendar" width={16} height={16} />
                <span className="flex-1">2024-04-10 14:00</span>
              </div>
              <div className="flex gap-[8px]">
                <Image src={flagIcon} alt="calendar" width={16} height={16} />
                <span className="flex-1">남자 복식 개나리부 128강</span>
              </div>
              <div className="flex gap-[8px]">
                <Image src={mapPinIcon} alt="calendar" width={16} height={16} />
                <span className="flex-1">열우물 테니스장</span>
              </div>
              <div className="flex gap-[8px]">
                <Image src={mapIcon} alt="calendar" width={16} height={16} />
                <span className="flex-1">서울시 서초구 강남대로 99길 45</span>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-[8px]">
            <div className="text-headline-6">대회 요강</div>

            <div className="flex w-full flex-col gap-[4px] text-body-2 text-gray-80">
              <div>열우물 테니스장에서 열리는 테니스 대회</div>
              <div>대회 규칙</div>
            </div>
          </div>

          <div className="flex w-full items-center gap-[6px]">
            <div className="text-headline-6">대회 상세 요강 링크</div>
            <Link href={'#'}>
              <Image src={chevronRightIcon} alt="right" width={16} height={16} />
            </Link>
          </div>

          <div className="flex w-full items-center gap-[6px]">
            <div className="text-headline-6">문의하기</div>
            <Link href={'#'}>
              <Image src={chevronRightIcon} alt="right" width={16} height={16} />
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-col items-start pt-[20px]">
          <Button label="대회 현황 보기" />
        </div>
      </div>
    </div>
  );
};

export default page;
