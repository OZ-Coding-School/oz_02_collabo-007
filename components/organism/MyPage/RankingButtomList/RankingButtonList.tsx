'use client';

import React, { useState } from 'react';
import RankingButton from '../RankingButton/RankingButton';
import { MyProfileRanking } from '@/@types/ranking';
import Button from '@/components/core/Button/Button';

const RankingButtonList = ({
  gender,
  myProfileRanking,
}: {
  gender: string;
  myProfileRanking: MyProfileRanking;
}) => {
  const matchTypeArr = Object.keys(myProfileRanking).filter(
    (_, index) => index !== 0,
  ) as ('single' | 'double' | 'team')[];

  const [isSelected, setIsSelected] = useState<string | null>(
    myProfileRanking.mainRanking !== '0' ? myProfileRanking.mainRanking : null,
  );

  return (
    <>
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[16px] overflow-y-scroll bg-white p-[20px]">
        {matchTypeArr.map((type, index) => (
          <div className="w-full" key={index} onClick={() => setIsSelected(type)}>
            <RankingButton
              rankingData={myProfileRanking[type]}
              mainRanking={type === myProfileRanking.mainRanking}
              gender={gender}
              type={type}
              isClicked={isSelected === type}
            />
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 w-full bg-white p-[20px]">
        <Button label="선택하기" disabled={!isSelected} />
      </div>
    </>
  );
};

export default RankingButtonList;
