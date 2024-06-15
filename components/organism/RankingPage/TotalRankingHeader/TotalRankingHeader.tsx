'use client';

import Input from '@/components/core/Input/Input';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@/app/_asset/icons/search.svg';
import useDebounce from '@/lib/hook/useDebounce';
import { useRouter, useSearchParams } from 'next/navigation';

const TotalRankingHeader = () => {
  const [searchValue, setSearchValue] = useState('');
  const debounceSearchValue = useDebounce<string>(searchValue, 500);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debounceSearchValue) params.set('playerName', `${debounceSearchValue}`);
    if (debounceSearchValue === '') params.delete('playerName');

    router.replace(`/ranking/?${params.toString()}`);
  }, [debounceSearchValue, searchParams, router]);

  return (
    <div className="flex w-full flex-col gap-[12px]">
      <div className="w-full text-headline-6">전체랭킹</div>
      <div className="relative">
        <SearchIcon className="absolute left-[12px] top-[13px] z-50 h-[20px] w-[20px] fill-gray-50" />
        <Input
          placeholder="선수 검색"
          className=" border-gray-30 py-[10px] pl-[44px] pr-[12px]"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TotalRankingHeader;
