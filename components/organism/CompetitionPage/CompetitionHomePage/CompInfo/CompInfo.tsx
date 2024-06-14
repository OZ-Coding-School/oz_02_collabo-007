import type { Competition } from '@/@types/competition';
import { ISearchParams, getCompData } from '@/app/_actions/getCompData';
import CompCard from '@/components/module/CompCard/CompCard';
import { CompListVariants } from '@/components/organism/HomPage/HomeCompInfo/HomeCompInfo';
import { cn } from '@/lib/utils/cn';
import React from 'react';

const CompInfo = async ({ searchParams }: { searchParams: ISearchParams }) => {
  const compData: Competition[] | { detail: string } = await getCompData(searchParams);

  return (
    <div className={cn(CompListVariants({ variant: 'vertical' }))}>
      {Array.isArray(compData) ? (
        compData.map((comp) => <CompCard key={comp.id} comp={comp} status="comp" />)
      ) : (
        <div className="flex min-w-full flex-col items-center justify-center gap-[16px] rounded-[8px] bg-white p-[16px] text-gray-60 shadow-md">
          {compData.detail}
        </div>
      )}
    </div>
  );
};

export default CompInfo;
