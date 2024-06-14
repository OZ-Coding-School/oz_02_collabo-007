import { Record } from '@/@types/record';
import { getMyRecord } from '@/app/_actions/getMyRecord';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import {
  RecordSection,
  TotalRecordSection,
} from '@/components/organism/ProfilePage/UserPage';
import React from 'react';

const page = async ({ params }: { params: { id: number } }) => {
  const {
    userRecord: { wins, losses },
    userMatches,
  }: Record = await getMyRecord(params.id);

  return (
    <div className="bg relative flex h-full w-full flex-col">
      <HeaderBar title="내 전적" backBtn />
      <TotalRecordSection win={wins} lose={losses} />

      <div className="no-scrollbar flex flex-1 flex-col items-start gap-[32px] overflow-scroll bg-gray-10 px-[20px] py-[24px]">
        {userMatches.map((matchData, index) => (
          <RecordSection key={index} matchData={matchData} />
        ))}
      </div>
    </div>
  );
};

export default page;
