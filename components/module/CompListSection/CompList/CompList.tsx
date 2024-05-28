import React, { HTMLAttributes } from 'react';
import { data } from '@/app/data.js';
import CompCard from './CompCard/CompCard';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

import { Competition } from '@/@types/competition';
import { getCompData } from '@/app/competition/getCompData';

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
  compStatus?: string | null;
  gender?: string;
  type?: string;
}

const CompList = async ({
  title,
  compStatus,
  gender = '',
  type = '',
  variant,
}: CompListProps) => {
  const competitionData: Competition[] = await getCompData(gender, type);

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
          {competitionData.map((comp, index) => (
            <CompCard comp={comp} key={index} />
          ))}
        </>
      )}
      {
        <>
          {competitionData.map((comp, index) =>
            comp.status === compStatus ? (
              <CompCard comp={comp} title={title} key={index} />
            ) : null,
          )}
        </>
      }
    </div>
  );
};

export default CompList;
