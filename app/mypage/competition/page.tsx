import { TabGroup } from '@/components/core/CompNavigation/TapGroup';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import CancelAlert from '@/components/module/CancelAlert/CancelAlert';
import MyCompInfo from '@/components/organism/MyPage/MyCompInfo/MyCompInfo';
import { COMP_LIST_OPTIONS } from '@/constants/competition';
import { Suspense } from 'react';

const page = ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const { status } = searchParams;

  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="sticky top-0 z-10">
        <HeaderBar title="참가 신청한 대회" backBtn route="/mypage" />
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
      <div className="flex w-full flex-1 border-t-[1px] border-gray-30 bg-gray-10 p-[20px]">
        {/* TODO: 스켈레톤 추가 */}
        <Suspense fallback={<div>loading...</div>}>
          <MyCompInfo status={status} />
        </Suspense>
      </div>

      <CancelAlert />
    </div>
  );
};

export default page;
