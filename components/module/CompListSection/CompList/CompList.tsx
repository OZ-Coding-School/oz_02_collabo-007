import React, { HTMLAttributes } from 'react';
import CompCard from './CompCard/CompCard';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';
import { Competition } from '@/@types/competition';
import { getCompData } from '@/app/_actions/getCompData';

export const CompListVariants = cva(
  `
    no-scrollbar
    `,
  {
    variants: {
      variant: {
        flex: 'flex w-[calc(100%+40px)] ml-[-20px] px-[20px] gap-[12px] overflow-y-scroll pb-[10px]',
        flexCol: 'flex flex-col w-full gap-[16px]',
      },
    },
    defaultVariants: {
      variant: 'flex',
    },
  },
);

export interface CompListProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof CompListVariants> {
  title?: string;
  currentLocation?: string | null;
  searchParams?: ISearchParams;
}

export interface ISearchParams {
  status?: string;
  tier?: string;
  gender?: string;
  type?: string;
  title?: string;
  date?: string;
}

const CompList = async ({
  title,
  searchParams,
  currentLocation,
  variant,
}: CompListProps) => {
  const competitionData: Competition[] = await getCompData(searchParams);
  const myCompetitionData = null;

  return (
    <div className={cn(CompListVariants({ variant }))}>
      {!title &&
        competitionData.map((comp) => (
          <CompCard comp={comp} key={comp.id} currentLocation={currentLocation} />
        ))}
      {title === '참가 예정 대회' || title === '최근 참가 대회' ? (
        <CompCard
          comp={myCompetitionData}
          title={title}
          currentLocation={currentLocation}
        />
      ) : null}
      {title === '대회 정보' &&
        competitionData.map((comp) => (
          <CompCard comp={comp} key={comp.id} currentLocation={currentLocation} />
        ))}
    </div>
  );
};

export default CompList;
