'use client';

import Modal from '@/components/module/Modal/Modal';
import ModalContent from '@/components/module/ModalContent/ModalContent';
import React, { useEffect } from 'react';
import { ClubSearchData } from '@/@types/club';
import ClubList from './ClubList';
import { useRouter, useSearchParams } from 'next/navigation';

interface ClubModalProp {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  clubList: ClubSearchData[];
  setSelectedId: React.Dispatch<React.SetStateAction<ClubSearchData | null>>;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
  editMode?: boolean;
}

const ClubModal = ({
  isOpen,
  setIsOpen,
  clubList,
  setSelectedId,
  setIsChanged,
  editMode = false,
}: ClubModalProp) => {
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
      <ModalContent type="club" label="클럽 검색" handleCloseModal={handleCloseModal}>
        {(debounceSearchValue) => (
          <ClubList
            debounceSearchValue={debounceSearchValue}
            clubData={clubList}
            setSelectedId={setSelectedId}
            handleCloseModal={handleCloseModal}
            setIsChanged={setIsChanged}
            editMode={editMode}
          />
        )}
      </ModalContent>
    </Modal>
  );
};

export default ClubModal;
