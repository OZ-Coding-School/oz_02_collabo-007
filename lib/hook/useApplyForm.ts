import { applyCompetition } from '@/app/_actions/applyCompetition';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { useFormState } from 'react-dom';

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

const useApplyForm = (competitionId: number) => {
  const router = useRouter();
  const [state, formAction] = useFormState<ApplyState, FormData>(applyCompetition, null);
  const [, startTransaction] = useTransition();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!state) return;

    if (state.status === 'error') setIsError(() => true);

    if (state.status === 'success') {
      router.replace(`/competition/${competitionId}/success/`);
    }
  }, [state, router, competitionId]);

  return {
    state,
    formAction,
    startTransaction,
    isError,
    setIsError,
  };
};

export default useApplyForm;
