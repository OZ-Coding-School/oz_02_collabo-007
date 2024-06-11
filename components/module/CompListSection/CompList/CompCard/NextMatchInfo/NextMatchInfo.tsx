import type { NextMatchInfo } from '@/@types/competition';
import React from 'react';

interface NextMatchInfoProps {
  nextMatchInfo?: NextMatchInfo | null;
  status?: string;
}

const NextMatchInfo = ({ nextMatchInfo, status }: NextMatchInfoProps) => {
  return (
    <>
      <div className="flex rounded-[8px] bg-gray-20 p-[12px]">
        {status === '진행 전' && !nextMatchInfo?.opponent ? (
          <div className="flex w-full justify-center text-sub-headline-3 text-gray-60">
            <span>아직 경기가 배정되지 않았습니다.</span>
          </div>
        ) : (
          <div className="flex w-full justify-between">
            <div className="flex gap-[4px] text-sub-headline-3 text-gray-80">
              {nextMatchInfo?.teammate.map((player, index: number) => (
                <div key={index}>
                  <span key={player.id}>{player.name}</span>
                  {index !== nextMatchInfo?.teammate.length - 1 && <span>·</span>}
                </div>
              ))}
              <span>vs</span>
              {nextMatchInfo?.opponent && (
                <>
                  {nextMatchInfo?.opponent.map((player, index: number) => (
                    <div key={index}>
                      <span key={player.id}>{player.name}</span>
                      {index !== nextMatchInfo?.teammate.length - 1 && <span>·</span>}
                    </div>
                  ))}
                </>
              )}{' '}
              {!nextMatchInfo?.opponent && <span className="text-gray-50">미정</span>}
            </div>
            <span className="text-body-3 text-gray-60">
              {nextMatchInfo?.court ? <>{nextMatchInfo?.court}번 코트</> : <>미정</>}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default NextMatchInfo;
