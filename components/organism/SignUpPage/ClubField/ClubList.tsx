import React from 'react';
import ClubItem from './ClubItem';
import useClubList from '@/lib/hook/useClubList';
import type { ClubSearchData } from '@/@types/club';

export interface ClubListProps {
  debounceSearchValue: string;
  clubData: ClubSearchData[];
  setSelectedId: React.Dispatch<React.SetStateAction<ClubSearchData | null>>;
  handleCloseModal: () => void;
}

const ClubList = ({
  debounceSearchValue,
  clubData,
  setSelectedId,
  handleCloseModal,
}: ClubListProps) => {
  const { filteredData, handleClubItem } = useClubList({
    debounceSearchValue,
    clubData,
    setSelectedId,
    handleCloseModal,
  });

  return (
    <>
      {filteredData.length === 0 ? (
        <span className="flex h-full w-full items-center justify-center text-body-2 text-gray-60">
          {`클럽을 검색 해주세요`}
        </span>
      ) : (
        <>
          {filteredData.map((data) => (
            <div
              key={data.id}
              className="w-full cursor-pointer rounded-[8px] bg-white p-[12px] shadow-card"
              onClick={() => handleClubItem(data.id)}
            >
              <ClubItem name={data.name} address={data.address} image={data.imageUrl} />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ClubList;
