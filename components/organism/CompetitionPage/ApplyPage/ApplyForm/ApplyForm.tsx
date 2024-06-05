'use client';

import Button from '@/components/core/Button/Button';
import React from 'react';
import type { UserData } from '@/@types/user';
import ApplyFormContent from './ApplyFormContent';
import { AnimatePresence } from 'framer-motion';
import Dialog from '@/components/core/Dialog/Dialog';
import useApplyForm from '@/lib/hook/useApplyForm';

const ApplyForm = ({
  userData,
  competitionId,
  matchType,
}: {
  userData: UserData;
  competitionId: number;
  matchType: string;
}) => {
  const { state, formAction, startTransaction, isError, setIsError } =
    useApplyForm(competitionId);

  return (
    <>
      <form
        className="flex flex-1 flex-col"
        action={(formData) => startTransaction(() => formAction(formData))}
      >
        <ApplyFormContent
          userData={userData}
          competitionId={competitionId}
          matchType={matchType}
          isError={isError}
        />
      </form>

      <AnimatePresence mode="wait">
        {isError && state?.status === 'error' && (
          <Dialog setIsOpen={setIsError} title="에러" outsideDisable>
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
