'use client';
import type { Competition, MyCompetition } from '@/@types/competition';
import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import Button from '@/components/core/Button/Button';
import { useRouter } from 'next/navigation';
import { COMP_STATUS_BUTTON_CONTENT } from '@/constants/competition';

interface CompStatusButtonProps {
  compData: Competition | MyCompetition;
}

const CompStatusButton = ({ compData }: CompStatusButtonProps) => {
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
      <Button
        label={label}
        variant={variant}
        size={size}
        colors={colors}
        onClick={handleClick}
        disabled={compData.status === 'Registration Unavailable'}
      />
    </>
  );
};

export default CompStatusButton;
