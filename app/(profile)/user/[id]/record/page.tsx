import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import {
  RecordSection,
  TotalRecordSection,
} from '@/components/organism/ProfilePage/UserPage';
import React from 'react';

const page = () => {
  const { win, lose, records } = TEST_DATA;

  return (
    <div className="bg relative flex h-full w-full flex-col">
      <HeaderBar title="내 전적" backBtn />
      <TotalRecordSection win={win} lose={lose} />

      <div className="no-scrollbar flex flex-1 flex-col items-start gap-[32px] overflow-scroll bg-gray-10 px-[20px] py-[24px]">
        {/* {records.map((matchData) => (
          <RecordSection key={matchData.id} matchData={matchData} />
        ))} */}
      </div>
    </div>
  );
};

export default page;

// TEST
const TEST_DATA = {
  win: 10,
  lose: 5,
  records: [
    {
      id: 1,
      compName: '챔피언스 리그',
      date: '2024-04-10',
      category: '남자 복식',
      tier: '국화부',

      matches: [
        {
          court: 1,
          winner: {
            users: [{ name: '김형섭' }, { name: '이인호' }],
            scores: ['6', '6', '-'],
          },
          loser: {
            users: [{ name: '박성진' }, { name: '강민석' }],
            scores: ['3', '2', '-'],
          },
        },
        {
          court: 1,
          winner: {
            users: [{ name: '김형섭' }, { name: '이인호' }],
            scores: ['6', '6', '-'],
          },
          loser: {
            users: [{ name: '박성진' }, { name: '강민석' }],
            scores: ['3', '2', '-'],
          },
        },
        {
          court: 1,
          winner: {
            users: [{ name: '김형섭' }, { name: '이인호' }],
            scores: ['6', '6', '-'],
          },
          loser: {
            users: [{ name: '박성진' }, { name: '강민석' }],
            scores: ['3', '2', '-'],
          },
        },
        {
          court: 1,
          winner: {
            users: [{ name: '김형섭' }, { name: '이인호' }],
            scores: ['6', '6', '-'],
          },
          loser: {
            users: [{ name: '박성진' }, { name: '강민석' }],
            scores: ['3', '2', '-'],
          },
        },
      ],
    },
    {
      id: 2,
      compName: '서울 시장배',
      date: '2024-04-10',
      category: '남자 복식',
      tier: '국화부',

      matches: [
        {
          court: 1,
          winner: {
            users: [{ name: '김형섭' }, { name: '이인호' }],
            scores: ['6', '6', '-'],
          },
          loser: {
            users: [{ name: '박성진' }, { name: '강민석' }],
            scores: ['3', '2', '-'],
          },
        },
      ],
    },
  ],
};
