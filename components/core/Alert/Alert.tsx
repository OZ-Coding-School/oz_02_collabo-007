'use client';
import { AnimatePresence } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Dialog from '../Dialog/Dialog';
import Button from '../Button/Button';

const Alert = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [isAlert, setIsAlert] = useState(false);

  useEffect(() => {
    if (params.get('alert') !== null) {
      setIsAlert(() => true);
    }
  }, [params]);

  if (!isAlert) return null;

  const handlerRoute = () => {
    setIsAlert(() => false);
    router.replace('/signin');
  };

  const cancel = () => {
    setIsAlert(() => false);
    router.replace('/');
  };

  return (
    <AnimatePresence mode="wait">
      {isAlert && (
        <Dialog
          setIsOpen={setIsAlert}
          title="로그인 후 이용가능한 서비스입니다."
          outsideDisable
        >
          <>
            <div className="">로그인 페이지로 이동하시겠습니까?</div>
            <div className="flex w-[90%] items-center justify-center gap-[12px]">
              <Button
                label="취소"
                variant="secondary"
                colors="gray"
                onClick={cancel}
              ></Button>
              <Button label="이동하기" className="bg-error-60" onClick={handlerRoute} />
            </div>
          </>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default Alert;
