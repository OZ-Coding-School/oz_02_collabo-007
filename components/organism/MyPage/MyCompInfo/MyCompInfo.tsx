import { getMyCompData } from '@/app/_actions/getMyCompData';
import { cn } from '@/lib/utils/cn';
import React from 'react';
import { CompListVariants } from '../../HomPage/HomeCompInfo/HomeCompInfo';
import type { MyCompetition } from '@/@types/competition';
import CompCard from '@/components/module/CompCard/CompCard';

const MyCompInfo = async ({ status }: { status: string }) => {
  const compData: MyCompetition[] | { detail: string } = await getMyCompData({ status });

  return (
    <div
      className={cn(
        CompListVariants({ variant: 'vertical' }),
        'no-scrollbar flex-1 overflow-scroll border-t-[1px] border-gray-30 bg-gray-10 p-[20px]',
      )}
    >
      {Array.isArray(compData) ? (
        compData.map((comp) => <CompCard key={comp.id} comp={comp} status="my" />)
      ) : (
        <div className="flex w-full flex-1 flex-col items-center justify-center text-body-2 text-gray-60">
          {compData.detail}
        </div>
      )}
    </div>
  );
};

export default MyCompInfo;
