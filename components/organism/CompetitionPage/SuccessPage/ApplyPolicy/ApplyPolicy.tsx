import React from 'react';

const ApplyPolicy = ({ waiting }: { waiting: boolean }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-[10px] self-stretch rounded-[8px] bg-gray-20 p-[16px]">
      {waiting ? (
        <>
          <div className="text-sub-headline-3 font-[700] text-gray-80">
            대기자 입금 및 환불 정책
          </div>
          <ul className="list-disc pl-[12px] text-body-3 text-gray-60">
            <li>입금 전에는 반드시 [참가비 입금 안내]를 확인해 주세요.</li>
            <li>기한 내에 입금하지 않을 경우 대기 신청이 자동으로 취소될 수 있습니다.</li>
            <li>
              대기 신청 상태에서 대회 참가가 확정되지 않은 경우, 참가비는 모두 환불됩니다.
            </li>
            <li>대회가 취소될 경우, 참가비는 모두 환불됩니다.</li>
          </ul>
        </>
      ) : (
        <>
          <div className="text-sub-headline-3 font-[700] text-gray-80">
            참가자 입금 및 환불 정책
          </div>
          <ul className="list-disc pl-[12px] text-body-3 text-gray-60">
            <li>입금 전에는 반드시 [참가비 입금 안내]를 확인해 주세요.</li>
            <li>
              입금 기한 내에 입금하지 않을 경우 참가 신청이 자동으로 취소될 수 있습니다.
            </li>
            <li>대회가 취소될 경우, 참가비는 모두 환불됩니다.</li>
            <li>대회 신청을 취소할 경우, 참가비는 환불 절차에 따라 처리됩니다.</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default ApplyPolicy;
