'use client';
import { Competition } from '@/@types/competition';
import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import CompCardMatchDetail from '../CompCardMatchDetail/CompCardMatchDetail';
import Button from '@/components/core/Button/Button';
import { useRouter } from 'next/navigation';

interface CompStatusButtonProps {
  compData: Competition;
  currentLocation?: string | null;
}

interface CompStatusButtonContent {
  [key: string]: {
    label: string;
    variant: 'primary' | 'secondary' | 'tertiary' | 'ghost';
    size: 'sm' | 'md' | 'lg';
    colors: 'default' | 'gray';
    endPoint: string;
  };
}

const COMP_STATUS_BUTTON_CONTENT: CompStatusButtonContent = {
  '신청 가능': {
    label: '대회 신청하기',
    variant: 'primary',
    size: 'md',
    colors: 'default',
    endPoint: 'apply',
  },
  '신청 불가능': {
    label: '대회 신청하기',
    variant: 'primary',
    size: 'md',
    colors: 'default',
    endPoint: 'apply',
  },
  '신청 완료': {
    label: '대회 신청하기',
    variant: 'primary',
    size: 'md',
    colors: 'default',
    endPoint: 'success',
  },
  '대기 가능': {
    label: '대기 신청하기',
    variant: 'tertiary',
    size: 'md',
    colors: 'default',
    endPoint: 'apply',
  },
  '대회 진행중': {
    label: '대회 현황 보기',
    variant: 'tertiary',
    size: 'md',
    colors: 'gray',
    endPoint: 'progress',
  },
  '대회 종료': {
    label: '대회 결과 보기',
    variant: 'tertiary',
    size: 'md',
    colors: 'gray',
    endPoint: 'result',
  },
};

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
        />
      ) : null}
      {compData.nextMatch && <CompCardMatchDetail compData={compData} />}
    </>
  );
};

export default CompStatusButton;
