'use client';
import useClickOutside from '@/lib/hook/useClickOutsideModal';
import React, { Dispatch, FC, RefObject, SetStateAction, useRef } from 'react';
import { motion, useMotionValue, PanInfo } from 'framer-motion';
import ClubContent from './ClubContent';

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  inputRef: RefObject<HTMLDivElement>;
}

const ClubModal: FC<Props> = ({ setIsOpen, inputRef }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const y = useMotionValue(0);

  const handleCloseModal = () => {
    inputRef.current?.blur();
    setIsOpen((prev) => !prev);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent, info: PanInfo) => {
    if (info.offset.y > window.innerHeight * 0.3) {
      handleCloseModal();
    } else {
      y.set(0);
    }
  };

  useClickOutside(modalRef, () => {
    handleCloseModal();
  });

  return (
    <motion.div
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '100vh' }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-screen h-screen "
    >
      <motion.div
        ref={modalRef}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.5}
        onDragEnd={handleDragEnd}
        className="max-w-[500px] w-full h-full m-auto relative bg-gray-10 flex flex-col items-center"
      >
        <ClubContent handleCloseModal={handleCloseModal} />
      </motion.div>
    </motion.div>
  );
};

export default ClubModal;
