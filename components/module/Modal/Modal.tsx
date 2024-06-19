'use client';

import useClickOutside from '@/lib/hook/useClickOutsideModal';
import React, { FC, useRef } from 'react';
import { motion, useMotionValue, PanInfo } from 'framer-motion';

export interface ModalProps {
  handleCloseModal: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ handleCloseModal, children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const y = useMotionValue(0);

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
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 z-10 h-full w-full"
    >
      <motion.div
        ref={modalRef}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={1}
        onDragEnd={handleDragEnd}
        className="relative m-auto flex h-full w-full max-w-[500px] flex-col items-center bg-gray-10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
