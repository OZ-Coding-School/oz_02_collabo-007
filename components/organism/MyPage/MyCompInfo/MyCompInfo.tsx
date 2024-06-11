import { getMyCompData } from '@/app/_actions/getMyCompData';
import { cn } from '@/lib/utils/cn';
import React from 'react';
import { CompListVariants } from '../../HomPage/HomeCompInfo/HomeCompInfo';
import type { MyCompData } from '@/@types/competition';
import CompCard from '@/components/module/CompCard/CompCard';

const MyCompInfo = async ({ status }: { status: string }) => {
  const compData: MyCompData[] | { detail: string } = await getMyCompData({ status });

  return (
    <div className="flex w-full flex-1 flex-col gap-[12px]">
      <div className={cn(CompListVariants({ variant: 'vertical' }), 'flex-1')}>
        {Array.isArray(compData) ? (
          compData.map((comp) => <CompCard key={comp.id} comp={comp} status="my" />)
        ) : (
          <div className="flex w-full flex-1 flex-col items-center justify-center text-body-2 text-gray-60">
            {compData.detail}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCompInfo;
