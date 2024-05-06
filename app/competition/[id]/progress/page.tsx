import Button from '@/components/core/Button/Button';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import MatchResultCard from '@/components/module/MatchResultCard/MatchResultCard';
import React from 'react';

const page = () => {
  const { matches } = TEST_DATA;
  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="대회 현황" backBtn />

      <div className="flex w-full flex-col items-start gap-[16px] self-stretch p-[20px]">
        <div className="flex flex-col gap-[8px] self-stretch">
          <div className="text-headline-2">챔피언스리그</div>
          <div className="text-sub-headline-2 text-gray-80">남자 복식 개나리부</div>
        </div>

        <div className="no-scrollbar flex w-full items-center gap-[12px] overflow-scroll">
          <div>
            <Button
              className="h-[52px] w-[52px] rounded-full p-0 text-[14px] text-white"
              label={'32강'}
            />
          </div>
          {['16강', '8강', '준결승', '결승'].map((round, index) => (
            <div key={index}>
              <Button
                className="h-[52px] w-[52px] rounded-full p-0 text-[14px] text-gray-80"
                variant={'secondary'}
                colors="gray"
                label={round}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[16px] overflow-scroll bg-gray-10 px-[20px] py-[16px]">
        {matches.map((match, index) => (
          <MatchResultCard match={match} key={index} />
        ))}
      </div>
    </div>
  );
};

export default page;

const TEST_DATA = {
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
};
