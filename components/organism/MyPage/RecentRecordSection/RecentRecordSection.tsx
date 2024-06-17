import type { Record } from '@/@types/record';
import React from 'react';
import { RecordSection } from '../../ProfilePage/UserPage';

const RecentRecordSection = async ({ myRecordData }: { myRecordData: Record }) => {
  const recentCompetition = myRecordData?.userMatches[0];

  return (
    <div className="flex flex-col items-start gap-[32px]">
      {recentCompetition ? (
        <RecordSection matchData={recentCompetition} />
      ) : (
        <div className="flex w-full items-center justify-center rounded-[8px] border border-gray-20 bg-gray-20 py-[12px] text-body-2 leading-[24px] text-gray-60">
          최근 진행한 매치가 없습니다.
        </div>
      )}
    </div>
  );
};

export default RecentRecordSection;
