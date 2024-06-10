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
  currentLocation,
  variant,
  competitionType,
}: CompListProps) => {
  const [myCompetitionData, competitionData]: [MyCompData[], Competition[]] =
    await Promise.all([
      competitionType === 'mycompetition' || competitionType === 'both'
        ? getMyCompData(searchParams)
        : Promise.resolve(null),
      competitionType === 'competition' || competitionType === 'both'
        ? getCompData(searchParams)
        : Promise.resolve(null),
    ]);
  return (
    <div className={cn(CompListVariants({ variant }))}>
      {!title &&
        currentLocation === 'competition' &&
        competitionData.map((comp) => (
          <CompCard comp={comp} key={comp.id} competitionType={competitionType} />
        ))}
      {!title &&
        currentLocation === 'mycompetition' &&
        myCompetitionData.map((comp) => (
          <CompCard comp={comp} key={comp.id} competitionType={competitionType} />
        ))}

      {title === '참가 예정 대회' || title === '최근 참가 대회'
        ? myCompetitionData.map((comp) => (
            <CompCard
              key={comp.id}
              comp={comp}
              title={title}
              competitionType={competitionType}
            />
          ))
        : null}
      {title === '대회 정보' &&
        competitionData.map((comp) => (
          <CompCard comp={comp} key={comp.id} competitionType={competitionType} />
        ))}
    </div>
  );
};

export default CompList;
