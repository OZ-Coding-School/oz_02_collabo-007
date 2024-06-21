'use client';
import React from 'react';

export const RankingBoardHeader = ({ teamTab }: { teamTab: boolean }) => {
  return (
    <div className="flex items-center justify-between gap-[8px] py-[8px] text-gray-60">
      <span className="w-[24px] text-body-3">랭킹</span>
      <div className="flex w-[120px] gap-[8px]">
        <span className="text-body-3">{teamTab ? '팀' : '선수'}</span>
      </div>
      <div className="flex flex-1 justify-end">
        <span className="text-body-3">점수</span>
      </div>
      <div className="flex flex-1 justify-end">
        <span className="text-body-3">소속클럽</span>
      </div>
    </div>
  );
};
