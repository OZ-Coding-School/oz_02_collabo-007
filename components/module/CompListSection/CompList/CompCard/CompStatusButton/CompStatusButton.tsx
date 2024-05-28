import { Competition } from '@/@types/competition';
import React from 'react';
import CompCardMatchDetail from '../CompCardMatchDetail/CompCardMatchDetail';
import Button from '@/components/core/Button/Button';

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
  };
}

const COMP_STATUS_BUTTON_CONTENT: CompStatusButtonContent = {
  '신청 가능': {
    label: '대회 신청하기',
    variant: 'primary',
    size: 'md',
    colors: 'default',
  },
  '신청 불가능': {
    label: '대회 신청하기',
    variant: 'primary',
    size: 'md',
    colors: 'default',
  },
  '대기 가능': {
    label: '대기 신청하기',
    variant: 'tertiary',
    size: 'md',
    colors: 'default',
  },
  '대회 진행중': {
    label: '대기 현황 보기',
    variant: 'tertiary',
    size: 'md',
    colors: 'gray',
  },
  '대회 종료': {
    label: '대기 결과 보기',
    variant: 'tertiary',
    size: 'md',
    colors: 'gray',
  },
};

const CompStatusButton = ({ compData, currentLocation }: CompStatusButtonProps) => {
  const { status } = compData;
  const { label, variant, size, colors } = COMP_STATUS_BUTTON_CONTENT[status];
  return (
    <>
      {currentLocation === 'competition' ? (
        <Button label={label} variant={variant} size={size} colors={colors} />
      ) : null}
      {compData.nextMatch && <CompCardMatchDetail compData={compData} />}
    </>
  );
};

export default CompStatusButton;
