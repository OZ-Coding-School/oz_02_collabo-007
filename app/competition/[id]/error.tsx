'use client'; // Error components must be Client Components

import Button from '@/components/core/Button/Button';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-[20px]">
      <h2>Something went wrong!</h2>
      <div>
        <Button label="Try Again" onClick={() => reset()} />
      </div>
    </div>
  );
}
