'use client';

import React, { useEffect, useState } from 'react';
import SearchIcon from '@/app/_asset/icons/search.svg';
import Label from '@/components/core/Label/Label';
import { AnimatePresence } from 'framer-motion';
import Input from '@/components/core/Input/Input';
import PartnerItem from './PartnerItem';
import PartnerModal from './PartnerModal';
import type { PartnerData } from '@/@types/user';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface PartnerFieldProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  competitionId: number;
}

const PartnerField = ({ isOpen, setIsOpen, competitionId }: PartnerFieldProps) => {
  const [selectedId, setSelectedId] = useState<PartnerData | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleDelete = () => {
    setSelectedId(() => null);
  };

  useEffect(() => {
    if (searchParams.has('modalOpen')) {
      setIsOpen(() => true);
    }
  }, [searchParams, setIsOpen]);

  return (
    <div className="relative w-full">
      <div className={`flex flex-col items-start gap-[8px] self-stretch`}>
        <Label label={'파트너 검색'} name={'partnerId'} />

        <Input
          name="partnerId"
          className="hidden pl-[44px]"
          value={selectedId ? selectedId.id : ''}
          readOnly
        />

        <button
          type="button"
          onClick={() => router.push(`${pathname}?modalOpen=true`)}
          className="flex w-full items-center justify-start rounded-[8px] border-[1px] border-gray-30 py-[10px] pl-[44px] pr-[10px] text-body-1 text-gray-50"
        >
          {selectedId ? selectedId.username : '파트너 검색'}
        </button>

        <SearchIcon
          width={20}
          height={20}
          fill="#A6A6A6"
          className="absolute left-[12px] top-[40px]"
        />

        {selectedId && (
          <div
            className="w-full cursor-pointer rounded-[8px] bg-gray-20 p-[12px] text-body-2
          "
          >
            <PartnerItem
              name={selectedId.username}
              clubName={selectedId.club?.name}
              image={selectedId.imageUrl}
              handleDelete={handleDelete}
              displayMode
            />
          </div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <PartnerModal
            id={competitionId}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setSelectedId={setSelectedId}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PartnerField;
