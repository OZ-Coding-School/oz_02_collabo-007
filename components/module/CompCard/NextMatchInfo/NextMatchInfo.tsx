import type { Matches, MyCompData } from '@/@types/competition';
import React from 'react';

interface NextMatchInfoProps {
  matches: Matches;
  status?: string;
}

const NextMatchInfo = ({ compData }: MyCompData) => {
  return (
    <>
      <div className="flex rounded-[8px] bg-gray-20">
        {status === '진행 전' && !matches?.opponentUser ? (
          <div className="flex w-full justify-center text-sub-headline-3 text-gray-60">
            <span>아직 경기가 배정되지 않았습니다.</span>
          </div>
        ) : (
          <div className="flex w-full justify-between">
            <div className="flex gap-[4px] text-sub-headline-3 text-gray-80">
              {matches?.myteamUser.map((player, index) => (
                <div key={index}>
                  <span key={index}>{player}</span>
                  {index !== matches?.myteamUser.length - 1 && <span>·</span>}
                </div>
              ))}
              <span>vs</span>
              {matches?.opponentUser && (
                <>
                  {matches?.opponentUser.map((player, index) => (
                    <div key={index}>
                      <span key={index}>{player}</span>
                      {index !== matches?.myteamUser.length - 1 && <span>·</span>}
                    </div>
                  ))}
                </>
              )}{' '}
              {!matches?.opponentUser && <span className="text-gray-50">미정</span>}
            </div>
            <span className="text-body-3 text-gray-60">
              {matches?.courtNumber ? <>{matches?.courtNumber}번 코트</> : <>미정</>}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default NextMatchInfo;
