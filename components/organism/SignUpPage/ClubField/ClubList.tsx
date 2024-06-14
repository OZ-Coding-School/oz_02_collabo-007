import React from 'react';
import ClubItem from './ClubItem';
import useClubList from '@/lib/hook/useClubList';
import type { ClubSearchData } from '@/@types/club';
import { cn } from '@/lib/utils/cn';
import Button from '@/components/core/Button/Button';
import HelperText from '@/components/core/HelperText/HelperText';

export interface ClubListProps {
  debounceSearchValue: string;
  clubData: ClubSearchData[];
  setSelectedId: React.Dispatch<React.SetStateAction<ClubSearchData | null>>;
  handleCloseModal: () => void;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
  editMode?: boolean;
}

const ClubList = ({
  debounceSearchValue,
  clubData,
  setSelectedId,
  handleCloseModal,
  setIsChanged,
  editMode = false,
}: ClubListProps) => {
  const { filteredData, handleClubItem, checkedItem, setCheckedItem } = useClubList({
    debounceSearchValue,
    clubData,
    setSelectedId,
    handleCloseModal,
    setIsChanged,
  });

  return (
    <div className="no-scrollbar flex h-auto w-full flex-1 flex-col items-center gap-[16px] self-stretch overflow-scroll text-body-2">
      {filteredData.length === 0 ? (
        <span className="flex h-full w-full items-center justify-center text-body-2 text-gray-60">
          {`클럽을 검색 해주세요`}
        </span>
      ) : (
        <div className="no-scrollbar flex w-full flex-1 flex-col gap-[16px] overflow-scroll bg-gray-10 px-[20px] py-[24px]">
          {filteredData.map((data) => (
            <div
              key={data.id}
              className={cn(
                'w-full cursor-pointer rounded-[8px] bg-white p-[12px] shadow-card',
                `${checkedItem === data.id && 'border border-primary-60'}`,
              )}
              onClick={() => setCheckedItem(data.id)}
            >
              <ClubItem name={data.name} address={data.address} image={data.imageUrl} />
            </div>
          ))}
        </div>
      )}
      {checkedItem && (
        <div className="flex w-full flex-col gap-[16px] bg-white p-[20px]">
          {editMode && (
            <div>
              <HelperText
                variant="error"
                helperText="클럽을 변경하면 현재 소속된 클럽에서 탈퇴 처리됩니다."
              />
            </div>
          )}
          <Button
            type="button"
            label="클럽 가입 신청하기"
            onClick={() => handleClubItem(checkedItem)}
          />
        </div>
      )}
    </div>
  );
};

export default ClubList;
