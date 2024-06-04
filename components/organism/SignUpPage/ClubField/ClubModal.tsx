'use client';

import Modal from '@/components/module/Modal/Modal';
import ModalContent from '@/components/module/ModalContent/ModalContent';
import React from 'react';
import { ClubSearchData } from '@/@types/club';
import ClubList from './ClubList';

interface ClubModalProp {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  clubList: ClubSearchData[];
  setSelectedId: React.Dispatch<React.SetStateAction<ClubSearchData | null>>;
}

const ClubModal = ({ setIsOpen, clubList, setSelectedId }: ClubModalProp) => {
  const handleCloseModal = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  return (
    <Modal handleCloseModal={handleCloseModal}>
      <ModalContent type="club" label="클럽 검색" handleCloseModal={handleCloseModal}>
        {(debounceSearchValue) => (
          <ClubList
            debounceSearchValue={debounceSearchValue}
            clubData={clubList}
            setSelectedId={setSelectedId}
            handleCloseModal={handleCloseModal}
          />
        )}
      </ModalContent>
    </Modal>
  );
};

export default ClubModal;
