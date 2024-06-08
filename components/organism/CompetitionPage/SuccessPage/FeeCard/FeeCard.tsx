import React from 'react';
import type { AppliedCompetition } from '@/@types/apply';
import { formatDate } from '@/lib/utils/formatDate';

const FeeCard = ({
  competitionInfo,
  expiredDate,
}: {
  competitionInfo: AppliedCompetition;
  expiredDate: string;
}) => {
  const { bankAccountName, bankAccountNumber, bankName, fee } = competitionInfo;

  return (
    <div className="flex w-full flex-col items-start gap-[12px] rounded-[8px] p-[16px] shadow-card ">
      <div className="text-headline-6">참가비 입금 안내</div>

      <div className="flex flex-col items-start gap-[8px] self-stretch text-body-2">
        <div className="flex items-center justify-center gap-[8px] self-stretch text-gray-80">
          <div className="flex-1 text-gray-60">예금주</div>
          <div>{bankAccountName}</div>
        </div>
        <div className="flex items-center justify-center gap-[8px] self-stretch">
          <div className="flex-1 text-gray-60">결제 은행</div>
          <div>{bankName}</div>
        </div>
        <div className="flex items-center justify-center gap-[8px] self-stretch">
          <div className="flex-1 text-gray-60">계좌 번호</div>
          <div>{bankAccountNumber}</div>
        </div>
        <div className="flex items-center justify-center gap-[8px] self-stretch">
          <div className="flex-1 text-gray-60">입금 날짜</div>
          <div>{formatDate(expiredDate)} 까지</div>
        </div>
      </div>

      <div className="h-[1px] w-full border border-gray-30" />

      <div className="flex items-center justify-center gap-[8px] self-stretch">
        <div className="flex-1 text-gray-60">참가비</div>
        <div className="text-headline-7 text-primary-60">
          {fee && fee.toLocaleString()}원
        </div>
      </div>
    </div>
  );
};

export default FeeCard;
