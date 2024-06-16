'use client'; // Error components must be Client Components

import Button from '@/components/core/Button/Button';
import ChevronLeftIcon from '@/app/_asset/icons/chevron-left.svg';
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-[20px]">
      <div onClick={() => router.push('/')} className="cursor-pointer">
        <ChevronLeftIcon className="absolute left-[20px] top-[20px] h-[20px] w-[20px] fill-gray-60" />
      </div>
      <h2>Something went wrong!</h2>
      <div>
        <Button label="Try Again" onClick={() => reset()} />
      </div>
    </div>
  );
}
