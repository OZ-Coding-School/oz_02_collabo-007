import Button from '@/components/core/Button/Button';
import Link from 'next/link';
import React from 'react';
import { cookies } from 'next/headers';

const CompButton = ({
  id,
  status,
  waitingCount,
}: {
  id: number;
  status: string;
  waitingCount: number;
}) => {
  const cookie = cookies();
  const token = cookie.get('access');

  const CompStatus: { [key: string]: { element: JSX.Element; link: string } } = {
    'Registration Available': {
      element: <Button label="대회 신청하기" />,
      link: `apply`,
    },
    during: { element: <Button label="대회 현황 보기" />, link: `progress` },
    ended: { element: <Button label="대회 결과보기" />, link: `result` },
    'Registration Unavailable': {
      element: (
        <Button label="신청 불가 (성별 또는 실력 제한)" variant="primary" disabled />
      ),
      link: '#',
    },
    'Waitlist Available': {
      element: (
        <Button label={`대기 신청하기 (${waitingCount}명 대기 중)`} variant="tertiary" />
      ),
      link: `apply`,
    },
    'Registration Confirmed': {
      element: <Button label="신청 조회하기" />,
      link: `success`,
    },
  };

  const STATUS = CompStatus[status];

  return (
    <>
      {token ? (
        <Link
          href={`/competition/${id}/${STATUS.link}`}
          className="flex w-full flex-col items-start pt-[20px]"
        >
          {STATUS.element}
        </Link>
      ) : (
        <Link href={'/signin'} className="flex w-full flex-col items-start pt-[20px]">
          <Button label="로그인 후 이용 가능합니다" variant="secondary" />
        </Link>
      )}
    </>
  );
};

export default CompButton;
