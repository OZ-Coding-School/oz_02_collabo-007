'use client';

import Modal from '@/components/module/Modal/Modal';
import ModalContent from '@/components/module/ModalContent/ModalContent';
import React, { useEffect } from 'react';
import { PartnerData } from '@/@types/user';
import PartnerList from './PartnerList';
import { useRouter, useSearchParams } from 'next/navigation';

interface PartnerModalProp {
  id: number;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedId: React.Dispatch<React.SetStateAction<PartnerData | null>>;
}

const PartnerModal = ({ id, isOpen, setIsOpen, setSelectedId }: PartnerModalProp) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCloseModal = () => {
    setIsOpen((prev: boolean) => !prev);
    router.back();
  };

  const handleBackButtonClick = () => {
    if (isOpen) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const currentQueryParam = searchParams.get('modalOpen');
    setIsOpen(currentQueryParam === 'true');
    window.addEventListener('popstate', handleBackButtonClick);
    return () => {
      window.removeEventListener('popstate', handleBackButtonClick);
    };
  }, [searchParams]);

  return (
    <Modal handleCloseModal={handleCloseModal}>
      <ModalContent
        type="partner"
        label="파트너 검색"
        handleCloseModal={handleCloseModal}
      >
        {(debounceSearchValue) => (
          <PartnerList
            id={id}
            debounceSearchValue={debounceSearchValue}
            setSelectedId={setSelectedId}
            handleCloseModal={handleCloseModal}
          />
        )}
      </ModalContent>
    </Modal>
  );
};

export default PartnerModal;
