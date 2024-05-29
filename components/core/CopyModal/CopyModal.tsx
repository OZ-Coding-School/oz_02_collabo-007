'use client';
import React from 'react';
import { motion } from 'framer-motion';

const CopyModal = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex w-full justify-center rounded-lg bg-black px-[16px] py-[14px] text-white"
    >
      클립보드에 복사되었습니다.
    </motion.div>
  );
};

export default CopyModal;
