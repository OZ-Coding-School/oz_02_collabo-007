import React, { HTMLAttributes } from 'react';
import { data } from '@/app/data.js';
import CompCard from './CompCard/CompCard';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

import { Competition, CompetitionProps } from '@/@types/competition';
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

const category: { [key: string]: string } = {
  '신청 가능': '진행 전',
  '신청 불가능': '진행 전',
  '대기 가능': '진행 전',
  '대회 진행전': '진행 전',
  '대회 진행중': '진행 중',
  '대회 종료': '종료',
};

const setCategory = (comp: Competition): Competition => {
  comp['category'] = category[comp.status];
  return comp;
};

//
const CompList = async ({
  title,
  compStatus,
  searchParams,
  currentLocation,
  variant,
}: CompListProps) => {
  const { status = '전체', tier = '전체', date = 'closest' } = searchParams ?? {};

  const competitionData: Competition[] = await getCompData(searchParams);
  // status,tier 가 둘 다 있으면 둘 다 필터링이 되어야한다.
  // 한 가지만 있다면 한 가지만 필터링이 되어야 한다.
  // 없으면 아무것도 안 함

  const newArr = competitionData
    .map((ele: Competition) => setCategory(ele))
    .filter((ele: Competition) => (tier !== '전체' ? ele.tier.includes(tier) : ele))
    .filter((ele: Competition) => (status !== '전체' ? ele.category === status : ele));

  const sortedArr =
    date === 'closest'
      ? newArr.sort(
          (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
        )
      : newArr.sort(
          (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
        );
  // .filter((ele: Competition) => tier?.includes(ele.tier));

  return (
    <div className={cn(CompListVariants({ variant }))}>
      {title === '대회 정보' && (
        <>
          {sortedArr.map((comp, index) => (
            <CompCard comp={comp} key={index} currentLocation={currentLocation} />
          ))}
        </>
      )}
      {!title && compStatus === '전체' && (
        <>
          {sortedArr.map((comp, index) => (
            <CompCard comp={comp} key={index} currentLocation={currentLocation} />
          ))}
        </>
      )}
      {
        <>
          {sortedArr.map((comp, index) =>
            comp.status === compStatus ? (
              <CompCard
                comp={comp}
                title={title}
                key={index}
                currentLocation={currentLocation}
              />
            ) : null,
          )}
        </>
      }
    </div>
  );
};

export default CompList;
