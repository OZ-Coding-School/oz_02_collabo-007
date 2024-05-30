import React, { useEffect, useRef, useState } from 'react';
import type { ClubSearchData } from '@/@types/club';
import useDebounce from './useDebounce';
import { hangulToJamo } from './hangulToJamo';

interface useModalContentProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLDivElement>;
  searchData: ClubSearchData[];
  setSelectedId: React.Dispatch<React.SetStateAction<ClubSearchData | null>>;
}

const useModalContent = ({
  inputRef,
  setIsOpen,
  searchData,
  setSelectedId,
}: useModalContentProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState<ClubSearchData[]>([]);
  const debounceSearchValue = useDebounce<string>(searchValue, 500);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const handleCloseModal = () => {
    inputRef.current?.blur();
    setIsOpen((prev: boolean) => !prev);
  };

  useEffect(() => {
    if (debounceSearchValue === '') {
      setFilteredData(() => []);
      return;
    }

    const filtered: ClubSearchData[] = searchData.filter(({ name }: { name: string }) => {
      return hangulToJamo(name).includes(hangulToJamo(debounceSearchValue));
    });

    setFilteredData(() => filtered);
  }, [debounceSearchValue, searchData]);

  const handleClubItem = (selectedId: number) => {
    const data = searchData.find(
      ({ id }: { id: number }) => id === selectedId,
    ) as ClubSearchData;
    setSelectedId(() => data);
    handleCloseModal();
  };

  return {
    searchValue,
    setSearchValue,
    filteredData,
    setFilteredData,
    debounceSearchValue,
    searchInputRef,
    handleCloseModal,
    handleClubItem,
  };
};

export default useModalContent;
