import React from 'react';
import CompCardSkeleton from './CompCardSkeleton';
import { cn } from '@/lib/utils/cn';

const CompListSkeleton = ({
  title,
  variant,
}: {
  title?: string;
  variant?: 'flex' | 'flexCol' | null;
}) => {
  return (
    // <div className={cn(CompListVariants({ variant }))}>
    <div>
      {Array.from({ length: 4 }, (_, index) => {
        return <CompCardSkeleton title={title} key={index} />;
      })}
    </div>
  );
};

export default CompListSkeleton;
