import React from 'react';
import CompCardSkeleton from './CompCardSkeleton';
import { cn } from '@/lib/utils/cn';
import {
  CompListProps,
  CompListVariants,
} from '@/components/module/CompListSection/CompList/CompList';

const CompListSkeleton = ({ title, variant }: CompListProps) => {
  return (
    <div className={cn(CompListVariants({ variant }))}>
      {Array.from({ length: 4 }, (_, index) => {
        return <CompCardSkeleton title={title} key={index} />;
      })}
    </div>
  );
};

export default CompListSkeleton;
