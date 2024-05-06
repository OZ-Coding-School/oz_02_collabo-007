import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import UserProfileCard from '@/components/module/UserProfileCard/UserProfileCard';
import React from 'react';
import tennisImg from '@/public/tennis.jpeg';

const page = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="팀 멤버" backBtn />
      <div className="flex w-full flex-1 flex-col px-[20px] py-[16px]">
        <UserProfileCard data={TEST_DATA2} />
      </div>
    </div>
  );
};

export default page;

const TEST_DATA2 = [
  { name: '이인호', rank: 1, score: '3,485', team: '라온테니스 A', image: tennisImg },
  { name: '이인호', rank: 2, score: '3,485', team: '라온테니스 A', image: tennisImg },
  { name: '이인호', rank: 3, score: '3,485', team: '라온테니스 A', image: tennisImg },
  { name: '이인호', rank: 4, score: '3,485', team: '라온테니스 A', image: tennisImg },
  { name: '이인호', rank: 5, score: '3,485', team: '라온테니스 A', image: tennisImg },
];
