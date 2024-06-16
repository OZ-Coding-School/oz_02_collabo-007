import Button from '@/components/core/Button/Button';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import RankingButton from '@/components/organism/MyPage/RankingButton/RankingButton';
import React from 'react';

const Ranking = () => {
  return (
    <div className="flex h-full flex-1 flex-col">
      <HeaderBar title="대표 랭킹 설정" backBtn />
      <div className="no-scrollbar relative flex w-full flex-1 flex-col gap-[16px] overflow-y-scroll bg-white p-[20px]">
        <RankingButton />
        <div className="absolute bottom-[20px] left-0 w-full px-[20px]">
          <Button label="선택하기" disabled />
        </div>
      </div>
    </div>
  );
};

export default Ranking;
