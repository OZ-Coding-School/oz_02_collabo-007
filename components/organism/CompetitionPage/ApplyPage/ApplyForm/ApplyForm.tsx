'use client';

import Button from '@/components/core/Button/Button';
import React, { useEffect, useState, useTransition } from 'react';
import type { UserData } from '@/@types/user';
import ApplyFormContent from './ApplyFormContent';
import { useFormState } from 'react-dom';
import { applyCompetition } from '@/app/competition/[id]/apply/applyCompetition';
import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Dialog from '@/components/core/Dialog/Dialog';

export type ApplyState =
  | {
      status: 'success';
      message: string;
    }
  | {
      status: 'error';
      message: string;
    }
  | null;

const ApplyForm = ({
  userData,
  competitionId,
}: {
  userData: UserData;
  competitionId: number;
}) => {
  const router = useRouter();
  const [state, formAction] = useFormState<ApplyState, FormData>(applyCompetition, null);
  const [, startTransaction] = useTransition();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!state) return;

    if (state.status === 'error') setIsError(() => true);

    if (state.status === 'success') {
      router.push(`/competition/${competitionId}/success/`);
    }
  }, [state, router, competitionId]);

  return (
    <>
      <form
        className="flex flex-1 flex-col"
        action={(formData) => startTransaction(() => formAction(formData))}
      >
        <ApplyFormContent userData={userData} competitionId={competitionId} />
      </form>

      <AnimatePresence mode="wait">
        {isError && state?.status === 'error' && (
          <Dialog setIsOpen={setIsError} title="에러">
            <>
              <div className="">{state.message}</div>
              <div className="w-[40%]">
                <Button
                  label="확인"
                  size="sm"
                  className="bg-error-60"
                  onClick={() => setIsError(() => false)}
                />
              </div>
            </>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default ApplyForm;
