import { UserData } from '@/@types/user';
import React from 'react';

interface UserHighlightRankingCardProps {
  rankingPanel?: boolean;
  userData: UserData;
}

const UserHighlightRankingCard = ({
  rankingPanel,
  userData,
}: UserHighlightRankingCardProps) => {
  return (
    <>
      {rankingPanel && userData.id ? (
        <div className="flex w-full items-center justify-center gap-[12px] rounded-[8px] border-[1px] border-primary-60 p-[12px] shadow-md">
          {userData.ranking ? (
            <>
              {/* <span className="flex gap-[4px] text-sub-headline-2 text-gray-80">
                  {userData.ranking ? userData.ranking.single.name : null}
                  <span>·</span>
                  {userData.ranking ? userData.ranking.single.tier : null}
                </span>
                <span className="text-headline-6 text-primary-60">
                  {userData.ranking ? userData.ranking.single.rank : null}
                </span> */}
            </>
          ) : (
            <span className="text-sub-headline-2 text-primary-60">
              현재 등록된 대표 랭킹이 없습니다.
            </span>
          )}
        </div>
      ) : null}
    </>
  );
};

export default UserHighlightRankingCard;
