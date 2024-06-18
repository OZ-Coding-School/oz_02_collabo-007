import type { MyCompetition } from '@/@types/competition';
import { cn } from '@/lib/utils/cn';
import React from 'react';
import { CompListVariants } from '../HomeCompInfo/HomeCompInfo';
import CompCard from '@/components/module/CompCard/CompCard';

interface HomeMyCompInfoCardProps {
  data: MyCompetition[] | { detail: string };
}

const HomeMyCompInfoCard = ({ data }: HomeMyCompInfoCardProps) => {
  return (
    <>
      <div className={cn(CompListVariants({ variant: 'horizontal' }))}>
        {Array.isArray(data) ? (
          data.map((comp) => <CompCard key={comp.id} comp={comp} status="my" />)
        ) : (
          <div className="flex min-w-full flex-col items-center justify-center gap-[16px] rounded-[8px] bg-white p-[16px] text-gray-60 shadow-md">
            {data.detail}
          </div>
        )}
      </div>
    </>
  );
};

export default HomeMyCompInfoCard;
