import type { ApplicantInfo } from '@/@types/apply';
import Button from '@/components/core/Button/Button';
import Link from 'next/link';
import React from 'react';
import { cookies } from 'next/headers';
import { Secondary } from '@/stories/Avatar.stories';

const CompButton = ({
  id,
  status,
  waitingCount,
  applicantsInfo,
}: {
  id: number;
  status: string;
  waitingCount: number;
  applicantsInfo?: ApplicantInfo;
}) => {
  const cookie = cookies();
  const token = cookie.get('access');

  const CompStatus: { [key: string]: { element: JSX.Element; link: string } } = {
    '신청 가능': { element: <Button label="대회 신청하기" />, link: `apply` },
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

  if (applicantsInfo && (status === '신청 가능' || '대기 신청')) {
    return (
      <Link
        href={`/competition/${id}/success`}
        className="flex w-full flex-col items-start pt-[20px]"
      >
        <Button label="참가 신청 조회" />
      </Link>
    );
  }

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
