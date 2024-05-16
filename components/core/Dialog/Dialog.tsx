'use client';

import useClickOutside from '@/lib/hook/useClickOutsideModal';
import React, { Dispatch, FC, SetStateAction, useRef } from 'react';
import { motion, useMotionValue, PanInfo } from 'framer-motion';

interface DialogProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Dialog: FC<DialogProps> = ({ isOpen, setIsOpen }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const y = useMotionValue(0);

  const handleCloseModal = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  useClickOutside(dialogRef, () => {
    handleCloseModal();
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      exit={{ y: '100vh' }}
      transition={{ duration: 0.2 }}
      className="fixed left-0 top-0 z-10 h-screen w-screen bg-black/30"
    >
      <motion.div
        ref={dialogRef}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.5}
        className="relative m-auto flex h-full w-full max-w-[500px] flex-col items-center justify-center bg-gray-10"
      >
        <div>hello</div>
      </motion.div>
    </motion.div>
  );
};

export default Dialog;
