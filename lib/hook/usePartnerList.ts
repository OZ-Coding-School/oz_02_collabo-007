import { useEffect, useState } from 'react';
import type { PartnerData } from '@/@types/user';
import type { PartnerListProps } from '@/components/organism/CompetitionPage/ApplyPage/ApplyForm/PartnerField/PartnerList';

const usePartnerList = ({
  id,
  debounceSearchValue,
  setSelectedId,
  handleCloseModal,
}: PartnerListProps) => {
  const [filteredData, setFilteredData] = useState<PartnerData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (debounceSearchValue === '') {
      setFilteredData(() => []);
      return;
    }

    const filterPartner = async () => {
      setIsLoading(() => true);
      const res = await fetch(`/api/${id}/search?query=${debounceSearchValue}`);
      const data = await res.json();
      setFilteredData(() => data);
      setIsLoading(() => false);
    };

    filterPartner();
  }, [debounceSearchValue, setFilteredData, id]);

  const handlePartnerItem = (selectedId: number) => {
    const data = filteredData.find(
      ({ id }: { id: number }) => id === selectedId,
    ) as PartnerData;
    setSelectedId(() => data);
    handleCloseModal();
  };

  return { filteredData, handlePartnerItem, isLoading };
};

export default usePartnerList;
