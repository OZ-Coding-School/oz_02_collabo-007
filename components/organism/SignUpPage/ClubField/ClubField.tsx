'use client';

import React, { useEffect, useState } from 'react';
import Label from '@/components/core/Label/Label';
import { AnimatePresence } from 'framer-motion';
import Input from '@/components/core/Input/Input';
import type { Club, ClubSearchData } from '@/@types/club';
import ClubItem from './ClubItem';
import ClubModal from './ClubModal';
import Button from '@/components/core/Button/Button';
import AddIcon from '@/app/_asset/icons/add.svg';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface ClubFieldProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  clubList: ClubSearchData[];
  clubData?: Club | null;
  editMode?: boolean;
  isChanged: boolean;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClubField = ({
  isOpen,
  setIsOpen,
  clubList,
  clubData = null,
  editMode = false,
  isChanged,
  setIsChanged,
}: ClubFieldProps) => {
  const [selectedId, setSelectedId] = useState<ClubSearchData | null>(clubData);
  const handleDelete = () => {
    setSelectedId(() => null);
    setIsChanged(() => true);
  };
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has('modalOpen')) {
      setIsOpen(() => true);
    }
  }, [searchParams, setIsOpen]);

  return (
    <div className="relative w-full">
      <div className={`flex flex-col items-start gap-[12px] self-stretch`}>
        <div className="flex flex-col gap-[4px]">
          {clubData?.id !== selectedId?.id && (
            <>
              <Label label={'소속 클럽 (옵션)'} name={'club'} />

              <Input
                name="club"
                className="hidden pl-[44px]"
                value={selectedId ? selectedId.id : ''}
                readOnly
              />
            </>
          )}
          <div className="text-body-3 text-gray-60">
            클럽을 추가하고 회원가입을 완료하면 클럽 가입 신청이 됩니다
          </div>
        </div>

        <Button
          type="button"
          variant={selectedId ? 'tertiary' : 'secondary'}
          label={selectedId ? '클럽 변경하기' : '클럽 추가'}
          icon={!selectedId && <AddIcon className="h-[20px] w-[20px] fill-gray-80" />}
          colors="gray"
          size="md"
          onClick={() => router.push(`${pathname}?modalOpen=true`)}
        />

        {selectedId && (
          <div className="w-full cursor-pointer rounded-[8px] bg-gray-20 p-[12px] shadow-card">
            <ClubItem
              name={selectedId.name}
              address={selectedId.address}
              image={selectedId.imageUrl}
              isChanged={isChanged}
              displayMode
              handleDelete={handleDelete}
            />
          </div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <ClubModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            clubList={clubList}
            setSelectedId={setSelectedId}
            setIsChanged={setIsChanged}
            editMode={editMode}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClubField;
