import React from 'react';
import PartnerItem from './PartnerItem';
import usePartnerList from '@/lib/hook/usePartnerList';
import type { PartnerData } from '@/@types/user';
import LoadingTennisBall from '@/components/core/LoadingTennisBall/LoadingTennisBall';

export interface PartnerListProps {
  id: number;
  debounceSearchValue: string;
  setSelectedId: React.Dispatch<React.SetStateAction<PartnerData | null>>;
  handleCloseModal: () => void;
}

const PartnerList = ({
  id,
  debounceSearchValue,
  setSelectedId,
  handleCloseModal,
}: PartnerListProps) => {
  const { filteredData, handlePartnerItem, isLoading } = usePartnerList({
    id,
    debounceSearchValue,
    setSelectedId,
    handleCloseModal,
  });

  if (isLoading) {
    return <LoadingTennisBall />;
  }

  return (
    <>
      {filteredData.length === 0 ? (
        <span className="flex h-full w-full items-center justify-center text-body-2 text-gray-60">
          {`파트너 검색을 해주세요`}
        </span>
      ) : (
        <div className="flex h-full w-full flex-col">
          {filteredData.map((data) => (
            <div
              key={data.id}
              className="w-full cursor-pointer border-b border-gray-30 bg-white py-[16px]"
              onClick={() => handlePartnerItem(data.id)}
            >
              <PartnerItem
                name={data.username}
                clubName={data.club?.name}
                image={data.imageUrl}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PartnerList;
