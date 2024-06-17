import type { MyProfileRanking } from '@/@types/ranking';
import { UserData } from '@/@types/user';
import { getMyTitleRanking } from '@/app/_actions/getMyTitleRanking';
import { GENDER, MATCH_TYPE } from '@/constants/competition';
import React from 'react';

interface UserHighlightRankingCardProps {
  userData: UserData;
}

const UserHighlightRankingCard = async ({ userData }: UserHighlightRankingCardProps) => {
  const myProfileRanking: MyProfileRanking = await getMyTitleRanking();
  const { mainRanking } = myProfileRanking;

  const TitleRanking = () => {
    const data = myProfileRanking[mainRanking as 'single' | 'double' | 'team'];
    const titleMatchType =
      mainRanking === 'team'
        ? '팀'
        : `${GENDER[userData!.gender]} ${MATCH_TYPE[mainRanking!]}`;

    let titleName = '미정';
    if (data && 'team' in data[0]) titleName = data[0].team.name;
    if (data && 'tier' in data[0]) titleName = data[0].tier.name;

    const titleRank = data ? `${data[0].rank}위` : '순위 없음';

    return (
      <div className="flex w-full items-center justify-center gap-[12px]">
        <div className="flex gap-[4px] text-sub-headline-2 text-gray-80">
          <div>{titleMatchType}</div>
          <div>{`\u00B7`}</div>
          <div className={`${!data && 'text-gray-50'}`}>{titleName}</div>
        </div>
        <div className="text-headline-6 text-primary-60">{titleRank}</div>
      </div>
    );
  };

  return (
    <>
      {mainRanking !== '0' ? (
        <div className="flex w-full items-center justify-center gap-[12px] rounded-[8px] border-[1px] border-primary-60 p-[12px] shadow-md">
          <div>{TitleRanking()}</div>
        </div>
      ) : (
        <span className="text-sub-headline-2 text-primary-60">
          현재 등록된 대표 랭킹이 없습니다.
        </span>
      )}
    </>
  );
};

export default UserHighlightRankingCard;
