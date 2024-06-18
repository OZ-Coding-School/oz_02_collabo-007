import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import React, { Suspense } from 'react';
import CompInfoCard from '@/components/organism/CompetitionProgressPage/CompInfoCard';
import MatchList from '@/components/organism/CompetitionProgressPage/MatchList';
import type { CompetitionDetails } from '@/@types/competition';
import { getCompDetail } from '@/app/_actions/getCompDetail';
import { TabGroup } from '@/components/core/CompNavigation/TapGroup';
import Button from '@/components/core/Button/Button';
import Link from 'next/link';
import MatchListSkeleton from '@/components/core/Skeleton/MatchListSkeleton';
import { cn } from '@/lib/utils/cn';

const page = async ({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: { roundnumber?: number };
}) => {
  const compDetailData: CompetitionDetails = await getCompDetail(params.id);

  function powersOfTwo(totalRounds: number) {
    return Array.from({ length: totalRounds }, (_, i) => Math.pow(2, i));
  }

  const rounds = powersOfTwo(compDetailData.totalRounds);
  return (
    <div className="relative flex h-full w-full flex-col">
      <HeaderBar title="대회 현황" backBtn />
      <div className="no-scrollbar relative flex flex-1 flex-col overflow-x-hidden overflow-y-scroll ">
        <div
          className={cn('px-[20px] pt-[20px]', !searchParams.roundnumber && 'pb-[20px]')}
        >
          <CompInfoCard compDetailData={compDetailData} />
        </div>
        {searchParams.roundnumber && (
          <div className="sticky top-0 z-10 flex justify-start bg-white p-[20px]">
            <TabGroup
              path={`/competition/${params.id}/progress/`}
              items={rounds.reverse().map((round, index) => ({
                text: `${index === rounds.length - 1 ? '결승' : index === rounds.length - 2 ? '준결승' : `${round * 2}강`}`,
                option: [{ roundnumber: `${index + 1}` }],
              }))}
              variant="circle"
            />
          </div>
        )}
        <Suspense fallback={<MatchListSkeleton />}>
          <MatchList
            params={params.id}
            searchParams={searchParams}
            rounds={rounds}
            matchType={compDetailData.matchTypeDetails.type}
            totalSets={compDetailData.totalSets}
          />
        </Suspense>
      </div>
      <div className="sticky bottom-0 w-full p-[20px]">
        <Link
          href={{
            pathname: `/competition/${params.id}/progress/`,
            query: searchParams.roundnumber
              ? {}
              : {
                  roundnumber: 1,
                },
          }}
          replace
        >
          <Button
            label={searchParams.roundnumber ? '경기 목록 보기' : '대진표 보기'}
            variant="secondary"
          />
        </Link>
      </div>
    </div>
  );
};

export default page;
