'use client';
import { Competition } from '@/@types/competition';
import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import CompCardMatchDetail from '../CompCardMatchDetail/CompCardMatchDetail';
import Button from '@/components/core/Button/Button';
import { useRouter } from 'next/navigation';
import { COMP_STATUS_BUTTON_CONTENT } from '@/constants/competition';

interface CompStatusButtonProps {
  compData: Competition;
  currentLocation?: string | null;
}

const CompStatusButton = ({ compData, currentLocation }: CompStatusButtonProps) => {
  const { status, id } = compData;
  const { label, variant, size, colors, endPoint } = COMP_STATUS_BUTTON_CONTENT[status];
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/competition/${id}/${endPoint}/`);
  };

  return (
    <>
      {currentLocation === 'competition' ? (
        <Button
          label={label}
          variant={variant}
          size={size}
          colors={colors}
          onClick={handleClick}
          disabled={compData.status === '신청 불가능'}
        />
      ) : null}
      {compData.nextMatch && <CompCardMatchDetail compData={compData} />}
    </>
  );
};

export default CompStatusButton;
