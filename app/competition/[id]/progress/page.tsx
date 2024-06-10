import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import React from 'react';
import CompInfoCard from '@/components/organism/CompetitionProgressPage/CompInfoCard';
import MatchList from '@/components/organism/CompetitionProgressPage/MatchList';
import type { CompDetailInfo } from '@/@types/competition';
import { getCompDetail } from '@/app/_actions/getCompDetail';
import { TabGroup } from '@/components/core/CompNavigation/TapGroup';
import Button from '@/components/core/Button/Button';
import Link from 'next/link';

const page = async ({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: { roundnumber?: string };
}) => {
  const compDetailData: CompDetailInfo = await getCompDetail(params.id);

  function powersOfTwo(totalRounds: number) {
    return Array.from({ length: totalRounds }, (_, i) => Math.pow(2, i + 1));
  }

  const rounds = powersOfTwo(compDetailData.totalRounds);
  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="대회 현황" backBtn />
      <div className="no-scrollbar relative flex h-full flex-1 flex-col overflow-y-scroll">
        <div className="px-[20px] pt-[20px]">
          <CompInfoCard compDetailData={compDetailData} />
        </div>
        <div className="sticky top-0 flex justify-start bg-white p-[20px]">
          {searchParams.roundnumber && (
            <TabGroup
              path={`/competition/${params.id}/progress/`}
              items={rounds.map((round, index) => ({
                text: `${index === 0 ? '결승' : index === 1 ? '준결승' : `${round}강`}`,
                option: [{ roundnumber: `${index + 1}` }],
              }))}
              variant="circle"
            />
          )}
        </div>
        <MatchList
          params={params.id}
          searchParams={searchParams}
          matchType={compDetailData.matchTypeDetails.type}
        />
      </div>
      <div className="w-full p-[20px]">
        <Link
          href={{
            pathname: `/competition/${params.id}/progress/`,
            query: searchParams.roundnumber
              ? {}
              : {
                  roundnumber: compDetailData.totalRounds,
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
