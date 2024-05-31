import Button from '@/components/core/Button/Button';
import Link from 'next/link';
import React from 'react';

const CompButton = ({
  id,
  status,
  waitingCount,
}: {
  id: number;
  status: string;
  waitingCount: number;
}) => {
  const CompStatus: { [key: string]: { element: JSX.Element; link: string } } = {
    '대회 진행전': { element: <Button label="대회 신청하기" />, link: `apply` },
    '대회 진행중': { element: <Button label="대회 현황 보기" />, link: `progress` },
    '대회 종료': { element: <Button label="대회 결과보기" />, link: `result` },
    '신청 불가능': {
      element: (
        <Button label="신청 불가 (성별 또는 실력 제한)" variant="primary" disabled />
      ),
      link: '#',
    },
    '대기 신청': {
      element: (
        <Button label={`대기 신청하기 (${waitingCount}명 대기 중)`} variant="tertiary" />
      ),
      link: `apply`,
    },
  };

  const STATUS = CompStatus[status];

  return (
    <>
      <Link
        href={`/competition/${id}/${STATUS.link}`}
        className="flex w-full flex-col items-start pt-[20px]"
      >
        {STATUS.element}
      </Link>
    </>
  );
};

export default CompButton;
