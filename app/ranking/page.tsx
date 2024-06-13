import React from 'react';
import DropdownIcon from '@/app/_asset/icons/dropdown.svg';
import Navbar from '@/components/module/Navbar/Navbar';
import RankingInfoCard from '@/components/module/RankingInfoCard/RankingInfoCard';
import InputModule from '@/components/module/InputModule/InputModule';
import SearchIcon from '@/app/_asset/icons/search.svg';

const COMP_CATEGORY = [
  { key: 1, title: '전체' },
  { key: 2, title: '남자 단식' },
  { key: 3, title: '여자 단식' },
  { key: 4, title: '남자 복식' },
  { key: 5, title: '여자 복식' },
  { key: 6, title: '혼성 복식' },
  { key: 7, title: '팀' },
];

const page = () => {
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
        <div className="no-scrollbar flex gap-[8px] overflow-scroll">
          {COMP_CATEGORY.map((item) => (
            <div
              key={item.key}
              className="items-center justify-center whitespace-nowrap rounded-[99px] bg-gray-20 px-[12px] py-[6px] text-body-2 text-gray-80"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className="no-scrollbar flex h-full flex-col gap-[40px] overflow-scroll border-t-[1px] border-gray-30 bg-gray-10 p-[20px]">
        <div className="flex flex-col gap-[12px]">
          <div>내 랭킹</div>
          <div className="flex justify-between gap-[8px] rounded-[8px] border-[1px] border-[#FC5214] px-[16px] py-[12px]">
            <span className="w-[24px]">5</span>
            <div className="flex w-[80px] gap-[8px]">
              <div className="h-[24px] w-[24px] rounded-[99px]  bg-gray-40"></div>
              <span>김형섭</span>
            </div>
            <div className="flex flex-1 justify-end">
              <span>1,580</span>
            </div>
            <div className="flex flex-1 justify-end">
              <span>라온테니스</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[12px]">
            <div>전체랭킹</div>
            <div>
              <SearchIcon className="relative  left-[12px] top-[30px] z-50 h-[20px] w-[20px] fill-gray-50" />
              <InputModule
                placeholder="남자 단식 선수 검색"
                className=" border-gray-30 py-[10px] pl-[44px] pr-[12px]"
              ></InputModule>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex flex-1 flex-col gap-[8px]">
              <div className="flex flex-row gap-[16px]">
                <div className="flex gap-[4px] py-[4px]">
                  <select>
                    <option>국화부</option>
                    <option>개나리부</option>
                  </select>
                  <DropdownIcon width={24} height={24} fill="#787878" />
                </div>
                <div className="flex gap-[4px] py-[4px]">
                  <select>
                    <option>클럽필터</option>
                    <option>라온테니스</option>
                  </select>
                  <DropdownIcon width={24} height={24} fill="#787878" />
                </div>
              </div>
              <div className="flex items-center justify-between gap-[8px] py-[8px]">
                <span className="w-[24px] text-body-3 text-gray-80">랭킹</span>
                <div className="flex w-[80px] gap-[8px]">
                  <span className="text-body-3 text-gray-80">선수</span>
                </div>
                <div className="flex flex-1 justify-end">
                  <span className="text-body-3 text-gray-80">점수</span>
                </div>
                <div className="flex flex-1 justify-end">
                  <span className="text-body-3 text-gray-80">소속클럽</span>
                </div>
              </div>
              <RankingInfoCard />
              <RankingInfoCard />
              <RankingInfoCard />
              <RankingInfoCard />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default page;
