'use client';
import React from 'react';
import Link from 'next/link';
import ChevronRightIcon from '@/app/_asset/icons/chevron-right.svg';
import CompInfoCard from '@/components/module/CompInfoCard/CompInfoCard';
import type { CompetitionDetails } from '@/@types/competition';
import PhoneIcon from '@/app/_asset/icons/phone.svg';
import CopyButton from '@/components/core/CopyButton/CopyButton';

const CompDetail = ({ data }: { data: CompetitionDetails }) => {
  return (
    <div className="flex w-full flex-1 flex-col gap-[24px]">
      <div className="flex w-full flex-col gap-[16px]">
        <div className="text-headline-3">{data.name}</div>
        <CompInfoCard data={data} />
      </div>

      <div className="flex w-full flex-col gap-[8px]">
        <div className="text-headline-6">대회 요강</div>
        <div className="flex w-full flex-col gap-[4px] text-body-2 text-gray-80">
          <div>{data.description}</div>
          <div>{data.rule}</div>
        </div>
      </div>
      <Link
        href={data.siteLink}
        className="flex w-full items-center gap-[6px]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="text-headline-6">대회 상세 요강 링크</div>
        <ChevronRightIcon width={16} height={16} fill="393939" />
      </Link>
      <div className="flex w-full flex-col gap-[8px]">
        <div className="text-headline-6">문의하기</div>
        <div className="flex items-center gap-[8px]">
          <PhoneIcon width={16} height={16} fill="#393939" />
          <span className="text-body-2 text-gray-80">{data.phone}</span>
          <CopyButton text={data.phone} />
        </div>
      </div>
    </div>
  );
};

export default CompDetail;
