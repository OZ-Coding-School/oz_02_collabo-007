'use client';

import Button from '@/components/core/Button/Button';
import { useRouter } from 'next/navigation';
import React from 'react';

const SuccessButtons = () => {
  const router = useRouter();

  return (
    <>
      <Button
        label="확인"
        colors="gray"
        variant="secondary"
        onClick={() => router.replace('/competition/')}
      />
      <Button label="신청 조회하기" />
    </>
  );
};

export default SuccessButtons;
