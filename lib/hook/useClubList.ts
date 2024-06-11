import { useEffect, useState } from 'react';
import type { ClubSearchData } from '@/@types/club';
import type { ClubListProps } from '@/components/organism/SignUpPage/ClubField/ClubList';
import { hangulToJamo } from '@/lib/utils/hangulToJamo';

const useClubList = ({
  debounceSearchValue,
  clubData,
  setSelectedId,
  handleCloseModal,
  setIsChanged,
}: ClubListProps) => {
  const [filteredData, setFilteredData] = useState<ClubSearchData[]>([]);
  const [checkedItem, setCheckedItem] = useState<number | null>(null);

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
    setIsChanged(() => true);
    handleCloseModal();
  };

  return { filteredData, handleClubItem, checkedItem, setCheckedItem };
};

export default useClubList;
