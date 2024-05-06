import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import React from 'react';
import tennisImg from '@/public/tennis.jpeg';
import UserProfileCard from '@/components/module/UserProfileCard/UserProfileCard';
import MemberCard from '@/components/organism/ProfilePage/MemberCard/MemberCard';
import InfoBanner from '@/components/organism/ProfilePage/InfoBanner/InfoBanner';
import ClubBanner from '@/components/organism/ProfilePage/ClubBanner/ClubBanner';
import Link from 'next/link';

const page = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="클럽 정보" backBtn />

      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[8px] overflow-scroll bg-gray-30">
        <div className="flex flex-col gap-[16px] bg-white px-[20px] py-[24px]">
          <InfoBanner
            name="라온테니스 클럽"
            image={tennisImg}
            description="라온테니스 클럽은 서울에 45년 전통을 자랑하는 테니스 클럽으로 실력 향상과 재미를
          모두 추구합니다."
          />
          <ClubBanner address="서울시 서초구 강남대로 99길 45" phone="02-1234-1234" />
        </div>

        <div className="flex w-full flex-1 flex-col gap-[40px] bg-white p-[20px]">
          <div className="flex flex-col gap-[12px]">
            <div className="text-headline-6">코치 정보</div>
            <MemberCard data={TEST_DATA} />
          </div>

          <div className="flex flex-col gap-[12px]">
            <div className="text-headline-6">클럽 팀</div>
            <MemberCard data={TEST_DATA} />
          </div>

          <div className="flex w-full flex-col gap-[12px]">
            <div className="flex gap-[16px]">
              <div className="flex-1 text-headline-6">멤버</div>
              <Link
                href={`/club/${1}/member`}
                className="text-sub-headline-2 text-gray-60"
              >
                전체 멤버 보기
              </Link>
            </div>

            <div className="flex w-full flex-col">
              <UserProfileCard data={TEST_DATA2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const TEST_DATA = [
  { name: '장민수', image: tennisImg },
  { name: '장민수', image: tennisImg },
  { name: '장민수', image: tennisImg },
];

const TEST_DATA2 = [
  { name: '이인호', rank: 1, score: '3,485', team: '라온테니스 A', image: tennisImg },
  { name: '이인호', rank: 2, score: '3,485', team: '라온테니스 A', image: tennisImg },
  { name: '이인호', rank: 3, score: '3,485', team: '라온테니스 A', image: tennisImg },
  { name: '이인호', rank: 4, score: '3,485', team: '라온테니스 A', image: tennisImg },
  { name: '이인호', rank: 5, score: '3,485', team: '라온테니스 A', image: tennisImg },
];
