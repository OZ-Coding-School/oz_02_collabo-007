'use client';

import Modal from '@/components/module/Modal/Modal';
import ModalContent from '@/components/module/ModalContent/ModalContent';
import React from 'react';
import { ClubSearchData } from '@/@types/club';
import ClubList from './ClubList';

interface ClubModalProp {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLDivElement>;
  clubList: ClubSearchData[];
  setSelectedId: React.Dispatch<React.SetStateAction<ClubSearchData | null>>;
}

const ClubModal = ({ setIsOpen, inputRef, clubList, setSelectedId }: ClubModalProp) => {
  const handleCloseModal = () => {
    inputRef.current?.blur();
    setIsOpen((prev: boolean) => !prev);
  };

  return (
    <Modal setIsOpen={setIsOpen} inputRef={inputRef}>
      <ModalContent
        setIsOpen={setIsOpen}
        inputRef={inputRef}
        type="club"
        label="클럽 검색"
      >
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
