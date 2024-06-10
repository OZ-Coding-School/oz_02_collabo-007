import { TabGroup } from '@/components/core/CompNavigation/TapGroup';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import CompListOptionMenuButton from '@/components/module/CompListOptionMenuButton/CompListOptionMenuButton';
import CompListSection from '@/components/module/CompListSection/CompListSection';
import { COMPLIST_OPTIONS } from '@/constants/competition';

const page = ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const { status } = searchParams;
  const compStatus: string | undefined | null = status;

  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="sticky top-0 z-10">
        <HeaderBar title="참가 신청한 대회" backBtn route="/mypage" />
        <div className={`flex w-full gap-[4px] bg-white px-[20px] pt-[12px]`}>
          <TabGroup
            path={'/mypage/competition/'}
            items={COMPLIST_OPTIONS.map((option, index) => ({
              text: `${option.title}`,
              option: [{ status: `${option.status}` }],
            }))}
            variant="underBar"
          />
        </div>
      </div>
      <div className="flex w-full flex-1 border-t-[1px] border-gray-30 bg-gray-10  p-[20px]">
        <CompListSection
          variant="flexCol"
          searchParams={searchParams}
          competitionType="mycompetition"
          currentLocation="mycompetition"
        />
      </div>
    </div>
  );
};

export default page;
