import Button from '@/components/core/Button/Button';
import Link from 'next/link';
import React from 'react';

const CompButton = ({ id, status }: { id: number; status: string }) => {
  switch (status) {
    case '대회 진행전':
      return (
        <Link
          href={`/competition/${id}/apply`}
          className="flex w-full flex-col items-start pt-[20px]"
        >
          <Button label="대회 신청하기" />
        </Link>
      );
    case '대회 진행중':
      return (
        <Link
          href={`/competition/${id}/progress`}
          className="flex w-full flex-col items-start pt-[20px]"
        >
          <Button label="대회 현황 보기" />
        </Link>
      );
    case '대회 종료':
      return (
        <Link
          href={`/competition/${id}/result`}
          className="flex w-full flex-col items-start pt-[20px]"
        >
          <Button label="대회 결과 보기" />
        </Link>
      );
  }
};

export default CompButton;
