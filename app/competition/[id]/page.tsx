import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import CompDetailSection from '@/components/module/CompDetailSection/CompDetailSection';
import React, { Suspense } from 'react';
import CompDetailSkeleton from '@/components/core/Skeleton/CompDetailSkeleton';

const page = async ({ params }: { params: { id: number } }) => {
  return (
    <div className="flex h-full w-full flex-col">
      <HeaderBar title="대회 상세 정보" backBtn />
      <Suspense fallback={<CompDetailSkeleton />}>
        <CompDetailSection id={params.id}></CompDetailSection>
      </Suspense>
    </div>
  );
};

export default page;
