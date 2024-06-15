import React from 'react';
import DropdownIcon from '@/app/_asset/icons/dropdown.svg';
import Navbar from '@/components/module/Navbar/Navbar';
import RankingInfoCard from '@/components/module/RankingInfoCard/RankingInfoCard';
import SearchIcon from '@/app/_asset/icons/search.svg';
import { RANKING_CATEGORY } from '@/constants/competition';
import { TabGroup } from '@/components/core/CompNavigation/TapGroup';
import { getUserRanking } from '../_actions/getUserRanking';
import { ISearchParams } from '../_actions/getCompData';
import { getTiers } from '../_actions/getTiers';
import TierFilter from '@/components/organism/CompetitionPage/CompetitionHomePage/TierFilter/TierFilter';
import { UserRanking } from '@/@types/ranking';
import MyRankingCard from '@/components/organism/RankingPage/MyRankingCard';
import Input from '@/components/core/Input/Input';

const page = async ({ searchParams }: { searchParams: ISearchParams }) => {
  const tiers = await getTiers();
  const usersRankingData: UserRanking[] = await getUserRanking(searchParams, tiers);

  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="flex flex-col gap-[16px] p-[20px]">
        <div className="flex flex-row gap-[8px]">
          <div>
            <h1 className="text-headline-2 text-gray-100">랭킹</h1>
          </div>
          <div className="flex gap-[4px] px-[12px] py-[6px]">
            <select>
              <option>2024</option>
              <option>2025</option>
            </select>
            <DropdownIcon width={24} height={24} fill="#787878" />
          </div>
        </div>
        <TabGroup
          path={'/ranking'}
          items={RANKING_CATEGORY.map((category, index) => ({
            text: `${category.title}`,
            option: [{ gender: `${category.gender}` }, { type: `${category.type}` }],
          }))}
          variant="round"
        />
      </div>
      <div className="no-scrollbar flex w-full flex-1 flex-col gap-[40px] overflow-scroll border-t-[1px] border-gray-30 bg-gray-10 p-[20px]">
        <div className="flex w-full flex-col gap-[12px]">
          <div className="text-headline-6">내 랭킹</div>
          <MyRankingCard />
        </div>
        <div className="flex w-full flex-col gap-[16px]">
          <div className="flex w-full flex-col gap-[12px]">
            <div className="w-full text-headline-6">전체랭킹</div>
            <div className="relative">
              <SearchIcon className="absolute left-[12px] top-[13px] z-50 h-[20px] w-[20px] fill-gray-50" />
              <Input
                placeholder="남자 단식 선수 검색"
                className=" border-gray-30 py-[10px] pl-[44px] pr-[12px]"
              />
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex flex-1 flex-col gap-[8px]">
              <div className="flex gap-[16px]">
                <TierFilter
                  tiers={tiers}
                  defaultValue={{ gender: 'male', type: 'single' }}
                />
                <div className="flex gap-[4px] py-[4px]">
                  <select>
                    <option>클럽필터</option>
                    <option>라온테니스</option>
                  </select>
                  <DropdownIcon width={24} height={24} fill="#787878" />
                </div>
              </div>
              <div className="flex items-center justify-between gap-[8px] py-[8px] text-gray-60">
                <span className="w-[24px] text-body-3">랭킹</span>
                <div className="flex w-[80px] gap-[8px]">
                  <span className="text-body-3">선수</span>
                </div>
                <div className="flex flex-1 justify-end">
                  <span className="text-body-3">점수</span>
                </div>
                <div className="flex flex-1 justify-end">
                  <span className="text-body-3">소속클럽</span>
                </div>
              </div>
              {usersRankingData.map((userRanking, index) => (
                <RankingInfoCard userRanking={userRanking} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default page;
