'use client';
import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';

const CancelAlert = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const comment = searchParams.get('message');

  useEffect(() => {
    if (comment) {
      setTimeout(() => {
        router.replace('/mypage/competition/');
      }, 500);
    }
  }, [comment, router]);

  return (
    <>
      <AnimatePresence>
        {comment && (
          <div className="absolute bottom-[24px] left-0 z-50 w-full px-[20px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex w-full justify-center rounded-lg bg-black px-[16px] py-[14px] text-white"
            >
              {comment}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CancelAlert;
