'use client';

import useClickOutside from '@/lib/hook/useClickOutsideModal';
import React, { Dispatch, FC, SetStateAction, useRef } from 'react';
import { motion } from 'framer-motion';

interface DialogProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
  outsideDisable?: boolean;
}

const Dialog: FC<DialogProps> = ({
  setIsOpen,
  title,
  outsideDisable = false,
  children,
}) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useClickOutside(dialogRef, () => {
    handleCloseModal();
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed left-0 top-0 z-10 h-full w-full bg-black/30"
    >
      <motion.div className="relative m-auto flex h-full w-full max-w-[500px] flex-col items-center justify-center px-[20px]">
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.5 }}
          transition={{ duration: 0.2 }}
          ref={outsideDisable ? null : dialogRef}
          className="flex w-full flex-col items-center gap-[24px] rounded-[8px] bg-white p-[24px]"
        >
          <div className="w-full text-center text-headline-5">{title}</div>
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Dialog;
