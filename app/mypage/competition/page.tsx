import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import CompListOptionMenu from '@/components/module/CompListOptionMenuButton/CompListOptionMenuButton';
import CompListSection from '@/components/module/CompListSection/CompListSection';

const COMPLIST_OPTIONS = [
  { title: '전체' },
  { title: '진행전' },
  { title: '진행중' },
  { title: '종료' },
];

const page = ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const { status } = searchParams;
  const compStatus: string | undefined | null = status;

  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="sticky top-0 z-10">
        <HeaderBar title="참가 신청한 대회" backBtn={true} />
        <div className={`flex gap-[4px] bg-white px-[20px] pt-[12px]`}>
          {COMPLIST_OPTIONS.map((option, index) => (
            <CompListOptionMenu
              pathName="/myapege/competition"
              query={{ status: option.title }}
              variant="underBar"
              isSelected={compStatus === option.title && true}
              title={option.title}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full flex-1 border-t-[1px] border-gray-30 bg-gray-10  p-[20px]">
        <CompListSection
          compStatus={compStatus}
          variant="flexCol"
          searchParams={searchParams}
        />
      </div>
    </div>
  );
};

export default page;
