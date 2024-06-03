import React, { HTMLAttributes } from 'react';
import CompCard from './CompCard/CompCard';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';
import { Competition, CompetitionProps } from '@/@types/competition';
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
  compStatus?: string | null;
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

//
const CompList = async ({
  title,
  compStatus,
  searchParams,
  currentLocation,
  variant,
}: CompListProps) => {
  const { date = 'closest' } = searchParams ?? {};
  const competitionData: Competition[] = await getCompData(searchParams);
  const myCompetitionData = null;
  // status,tier 가 둘 다 있으면 둘 다 필터링이 되어야한다.
  // 한 가지만 있다면 한 가지만 필터링이 되어야 한다.
  // 없으면 아무것도 안 함

  const sortedArr =
    date === 'closest'
      ? competitionData.sort(
          (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
        )
      : competitionData.sort(
          (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
        );

  return (
    <div className={cn(CompListVariants({ variant }))}>
      {title === '대회 정보' &&
        competitionData.map((comp) => (
          <>
            <CompCard comp={comp} key={1} currentLocation={currentLocation} />
          </>
        ))}
      {!title &&
        compStatus === '전체' &&
        sortedArr.map((comp) => (
          <>
            <CompCard comp={comp} key={2} currentLocation={currentLocation} />
          </>
        ))}
      {myCompetitionData && (
        <CompCard
          comp={myCompetitionData}
          title={title}
          // key={comp.id}
          currentLocation={currentLocation}
        />
      )}
    </div>
  );
};

export default CompList;
