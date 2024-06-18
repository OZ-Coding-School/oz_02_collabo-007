import { getMyCompData } from '@/app/_actions/getMyCompData';
import { BEFORE, DURING, ENDED, MY_COMP_LIST } from '@/constants/competition';
import Link from 'next/link';
import React from 'react';
import type { MyCompetition } from '@/@types/competition';
import HomeMyCompInfoCard from '../HomeMyCompInfoCard/HomeMyCompInfoCard';

const HomeMyCompInfo = async () => {
  const [beforeData, duringData, endedData]: MyCompetition[][] | { detail: string }[] =
    await Promise.all(
      [BEFORE, DURING, ENDED].map(async (status) => {
        return await getMyCompData({ status }, 4);
      }),
    );

  return (
    <>
      {[beforeData, duringData, endedData].map((data, index) => (
        <div key={index} className="flex w-full flex-col gap-[12px]">
          <div className={'flex items-center justify-between'}>
            <span className="text-headline-5 text-gray-100">
              {MY_COMP_LIST[index].title}
            </span>
            <Link
              href={MY_COMP_LIST[index].link}
              className="text-sub-headline-2 text-gray-60"
            >
              전체 목록 보기
            </Link>
          </div>

          <HomeMyCompInfoCard data={data} />
        </div>
      ))}
    </>
  );
};

export default HomeMyCompInfo;
