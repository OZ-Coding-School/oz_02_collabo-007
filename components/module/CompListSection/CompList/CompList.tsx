import React, { HTMLAttributes } from 'react';
import { data } from '@/app/data.js';
import CompCard from './CompCard/CompCard';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

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

interface CompListProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof CompListVariants> {
  title?: string;
  compStatus?: string | null;
}

const CompList = ({ title, compStatus, variant }: CompListProps) => {
  return (
    <div className={cn(CompListVariants({ variant }))}>
      {title === '대회 정보' && (
        <>
          {data.compList.comp.map((comp, index) => (
            <CompCard comp={comp} key={index} />
          ))}
        </>
      )}{' '}
      {!title && compStatus === '전체' && (
        <>
          {data.myComp.myCompetition.map((comp, index) => (
            <CompCard comp={comp} key={index} />
          ))}
        </>
      )}
      {
        <>
          {data.myComp.myCompetition.map((comp, index) =>
            comp.status === compStatus ? <CompCard comp={comp} key={index} /> : null,
          )}
        </>
      }
    </div>
  );
};

export default CompList;
