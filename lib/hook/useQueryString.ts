'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useCallback } from 'react';

const useQueryString = (name: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      if (name === 'tier') params.delete('club');
      if (name === 'year') {
        params.delete('club');
        params.delete('tier');
      }

      return params.toString();
    },
    [searchParams],
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname + '?' + createQueryString(name, event.target.value));
  };

  return {
    router,
    pathname,
    searchParams,
    createQueryString,
    handleChange,
  };
};

export default useQueryString;
