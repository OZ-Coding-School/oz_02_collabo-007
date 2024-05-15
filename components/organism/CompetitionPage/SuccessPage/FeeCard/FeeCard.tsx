import React from 'react';

const FeeCard = () => {
  return (
    <div className="flex flex-col items-start gap-[12px] rounded-[8px] p-[16px] shadow-card ">
      <div className="text-headline-6">참가비 입금 안내</div>

      <div className="flex flex-col items-start gap-[8px] self-stretch text-body-2">
        <div className="flex items-center justify-center gap-[8px] self-stretch text-gray-80">
          <div className="flex-1 text-gray-60">예금주</div>
          <div>테니스 협회</div>
        </div>
        <div className="flex items-center justify-center gap-[8px] self-stretch">
          <div className="flex-1 text-gray-60">결제 은행</div>
          <div>우리은행</div>
        </div>
        <div className="flex items-center justify-center gap-[8px] self-stretch">
          <div className="flex-1 text-gray-60">계좌 번호</div>
          <div>1002-22231-123123</div>
        </div>
        <div className="flex items-center justify-center gap-[8px] self-stretch">
          <div className="flex-1 text-gray-60">입금 날짜</div>
          <div>2024-04-15 23:59 까지</div>
        </div>
      </div>

      <div className="h-[1px] w-full border border-gray-30" />

      <div className="flex items-center justify-center gap-[8px] self-stretch">
        <div className="flex-1 text-gray-60">참가비</div>
        <div className="text-headline-7 text-primary-60">33,000원</div>
      </div>
    </div>
  );
};

export default FeeCard;
