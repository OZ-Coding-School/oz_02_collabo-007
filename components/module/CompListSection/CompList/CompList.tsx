import React, { HTMLAttributes } from 'react';
import { data } from '@/app/data.js';
import CompCard from './CompCard/CompCard';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

import { Competition, MyCompetition } from '@/@types/competition';

export const CompListVariants = cva(
  `
    no-scrollbar pb-[10px]
    `,
  {
    variants: {
      variant: {
        flex: 'flex w-[calc(100%+40px)] ml-[-20px] px-[20px] gap-[12px] overflow-y-scroll',
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
  compStatus?: string | null;
}

const getCompetitionData = async () => {
  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.compList);
    }, 1000);
  });
  return res;
};
const getMyCompetitionData = async () => {
  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.myComp);
    }, 1000);
  });
  return res;
};

const CompList = async ({ title, compStatus, variant }: CompListProps) => {
  const competitionData: Competition[] = await getCompetitionData().then();
  const myCompetitionData: MyCompetition[] = await getMyCompetitionData().then();

  return (
    <div className={cn(CompListVariants({ variant }))}>
      {title === '대회 정보' && (
        <>
          {competitionData.map((comp, index) => (
            <CompCard comp={comp} key={index} />
          ))}
        </>
      )}
      {!title && compStatus === '전체' && (
        <>
          {myCompetitionData.map((comp, index) => (
            <CompCard comp={comp} key={index} />
          ))}
        </>
      )}
      {
        <>
          {myCompetitionData.map((comp, index) =>
            comp.status === compStatus ? <CompCard comp={comp} key={index} /> : null,
          )}
        </>
      }
    </div>
  );
};

export default CompList;
