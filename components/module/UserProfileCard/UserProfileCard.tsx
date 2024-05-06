import UserProfile from '@/components/core/UserProfile/UserProfile';
import React, { FC } from 'react';
import { StaticImageData } from 'next/image';

interface UserProfileCardProps {
  data: {
    name: string;
    rank: number;
    score: string;
    team: string;
    image: StaticImageData;
  }[];
}

const UserProfileCard: FC<UserProfileCardProps> = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="flex w-full items-center gap-[8px] text-body-3 text-gray-60">
        <div className="w-[24px]">랭킹</div>
        <div className="flex w-[80px] items-center gap-[12px]">선수</div>
        <div className="flex-1 text-right">점수</div>
        <div className="flex-1 text-right">소속 팀</div>
      </div>
      {data?.map(({ name, image, rank, score, team }, index) => (
        <UserProfile
          key={index}
          image={image}
          name={name}
          rank={rank}
          score={score}
          team={team}
        />
      ))}
    </>
  );
};

export default UserProfileCard;
