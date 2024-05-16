import Button from '@/components/core/Button/Button';
import Link from 'next/link';
import React from 'react';

const CompButton = ({ id, status }: { id: number; status: string }) => {
  return (
    <Link
      href={`/competition/${id}/apply`}
      className="flex w-full flex-col items-start pt-[20px]"
    >
      <Button label="대회 현황 보기" />
    </Link>
  );
};

export default CompButton;
