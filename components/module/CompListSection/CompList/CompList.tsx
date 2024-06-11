import React, { HTMLAttributes } from 'react';
import { getMyCompData } from '@/app/_actions/getMyCompData';
import CompCard from './CompCard/CompCard';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';
import { Competition } from '@/@types/competition';
import { getCompData } from '@/app/_actions/getCompData';
import type { MyCompData } from '@/@types/competition';

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
  competitionType: string;
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
  currentLocation, // 제거 해도 됨
  variant,
  competitionType,
}: CompListProps) => {
  type FunctionType = (
    searchParams?: ISearchParams,
  ) => Promise<MyCompData[] | Competition[]>;

  const requestFunc: { [key: string]: FunctionType } = {
    mycompetition: getMyCompData,
    competition: getCompData,
  };

  const sendRequests = (endpoint: FunctionType) => endpoint(searchParams);

  const requests = requestFunc[competitionType];
  const competitionData: MyCompData[] | Competition[] = await sendRequests(requests);

  return (
    <div className={cn(CompListVariants({ variant }))}>
      {competitionData.map((comp) => (
        <CompCard
          comp={comp}
          key={comp.id}
          title={title}
          competitionType={competitionType}
        />
      ))}
    </div>
  );
};

export default CompList;
