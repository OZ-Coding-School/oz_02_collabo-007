import { useEffect, useState } from 'react';
import { hangulToJamo } from './hangulToJamo';
import type { ClubSearchData } from '@/@types/club';
import type { ClubListProps } from '@/components/organism/SignUpPage/ClubField/ClubList';

const useClubList = ({
  debounceSearchValue,
  clubData,
  setSelectedId,
  handleCloseModal,
}: ClubListProps) => {
  const [filteredData, setFilteredData] = useState<ClubSearchData[]>([]);

  useEffect(() => {
    if (debounceSearchValue === '') {
      setFilteredData(() => []);
      return;
    }

    const filtered: ClubSearchData[] = clubData.filter(({ name }: { name: string }) => {
      return hangulToJamo(name).includes(hangulToJamo(debounceSearchValue));
    });

    setFilteredData(() => filtered);
  }, [debounceSearchValue, clubData]);

  const handleClubItem = (selectedId: number) => {
    const data = clubData.find(
      ({ id }: { id: number }) => id === selectedId,
    ) as ClubSearchData;
    setSelectedId(() => data);
    handleCloseModal();
  };

  return { filteredData, handleClubItem };
};

export default useClubList;
