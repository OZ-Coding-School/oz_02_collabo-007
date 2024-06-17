'use client';

import Button from '@/components/core/Button/Button';
import Dialog from '@/components/core/Dialog/Dialog';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SuccessButtons = ({
  waiting,
  applicantsId,
}: {
  waiting: boolean;
  applicantsId: number;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [pending, setPending] = useState(false);

  const handleCancel = async () => {
    setPending(() => true);
    const res = await fetch(`/api/competitions/${applicantsId}/application/cancel`, {
      method: 'PUT',
    });

    setPending(() => false);
    if (res.ok) {
      router.replace(
        `/mypage/competition?message=${waiting ? '대기를 취소했습니다.' : '참가 신청을 취소했습니다.'}`,
      );
      router.refresh();
    }
  };

  return (
    <>
      <Button
        label="확인"
        colors="gray"
        variant="secondary"
        onClick={() => router.back()}
      />
      <Button
        variant="tertiary"
        label={waiting ? '대기 취소하기' : '참가 신청 취소하기'}
        onClick={() => setIsOpen(() => true)}
      />

      <AnimatePresence mode="wait">
        {isOpen && (
          <Dialog
            setIsOpen={setIsOpen}
            title={waiting ? '대기를 취소할까요?' : '대회 참가 신청을 취소할까요?'}
          >
            <>
              <div className="text-center text-body-2 text-gray-60">
                취소 후에는 복구할 수 없으며, 재참가를 위해서는 다시 대회 신청을
                해야합니다.
              </div>
              <div className="flex w-full items-center justify-center gap-[12px]">
                <Button
                  label="아니요"
                  colors="gray"
                  variant="secondary"
                  onClick={() => setIsOpen(() => false)}
                  disabled={pending}
                />
                <Button
                  label={waiting ? '대기 취소' : '참가 신청 취소'}
                  variant="primary"
                  className="bg-error-60"
                  onClick={handleCancel}
                  disabled={pending}
                />
              </div>
            </>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default SuccessButtons;
