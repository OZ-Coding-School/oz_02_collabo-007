import { TabGroup } from '@/components/core/CompNavigation/TapGroup';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import CompCardSkeleton from '@/components/core/Skeleton/CompCardSkeleton';
import CancelAlert from '@/components/module/CancelAlert/CancelAlert';
import MyCompInfo from '@/components/organism/MyPage/MyCompInfo/MyCompInfo';
import { COMP_LIST_OPTIONS } from '@/constants/competition';
import { Suspense } from 'react';

const page = ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const { status } = searchParams;

  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="">
        <HeaderBar title="참가 신청한 대회" backBtn />
        <div className={`flex w-full gap-[4px] bg-white px-[20px] pt-[12px]`}>
          <TabGroup
            path={'/mypage/competition/'}
            items={COMP_LIST_OPTIONS.map((option, index) => ({
              text: `${option.title}`,
              option: [{ status: `${option.status}` }],
            }))}
            variant="underBar"
          />
        </div>
      </div>

      <Suspense
        fallback={
          <div className="flex w-full flex-col gap-[32px]">
            {Array.from({ length: 5 }, (_, index) => {
              return <CompCardSkeleton key={index} />;
            })}
          </div>
        }
      >
        <MyCompInfo status={status} />
      </Suspense>

      <CancelAlert />
    </div>
  );
};

export default page;
