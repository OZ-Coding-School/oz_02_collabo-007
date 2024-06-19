import type { MyCompetition } from '@/@types/competition';
import React from 'react';

const NextMatchInfo = ({ compData }: { compData: MyCompetition }) => {
  const { matches, status, applyStatus } = compData;

  const beforeText =
    (applyStatus === 'unpaid' && '입금 대기중') ||
    (applyStatus === 'confirmed_participation' && !matches && '경기 미배정') ||
    (matches?.courtNumber && `${matches.courtNumber}번 코트`);

  const duringText = matches?.courtNumber ? `${matches.courtNumber}번 코트` : '미정';

  return (
    <>
      <div className="flex rounded-[8px] bg-gray-20">
        <div className="flex w-full justify-between">
          <div className="flex  gap-[4px] text-body-3 text-gray-80">
            <span className="text-headline-8">
              {compData.myteam.map((player: string) => player).join('\u00B7')}
            </span>
            {(status === 'before' && matches) || status === 'during' ? (
              <span>vs</span>
            ) : null}
            <span className={matches?.opponentUser ? 'text-gray-80' : 'text-gray-50'}>
              {matches?.opponentUser &&
                matches?.opponentUser.map((player: string) => player).join('\u00B7')}
              {status === 'before' &&
                !matches?.opponentUser &&
                applyStatus === 'confirmed_participation' &&
                matches &&
                '미정'}
              {status === 'during' && (!matches?.opponentUser || !matches) && '미정'}
            </span>
          </div>
          <div className="text-body-3 text-gray-50">
            {status === 'before' && beforeText}
            {status === 'during' && duringText}
          </div>
        </div>
      </div>
    </>
  );
};

export default NextMatchInfo;
