'use client';

import Modal from '@/components/module/Modal/Modal';
import ModalContent from '@/components/module/ModalContent/ModalContent';
import React from 'react';
import { PartnerData } from '@/@types/user';
import PartnerList from './PartnerList';

interface PartnerModalProp {
  id: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLDivElement>;
  setSelectedId: React.Dispatch<React.SetStateAction<PartnerData | null>>;
}

const PartnerModal = ({ id, setIsOpen, inputRef, setSelectedId }: PartnerModalProp) => {
  const handleCloseModal = () => {
    inputRef.current?.blur();
    setIsOpen((prev: boolean) => !prev);
  };

  return (
    <Modal setIsOpen={setIsOpen} inputRef={inputRef}>
      <ModalContent
        setIsOpen={setIsOpen}
        inputRef={inputRef}
        type="partner"
        label="파트너 검색"
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