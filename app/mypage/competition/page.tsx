import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import CompListSection from '@/components/module/CompListSection/CompListSection';
import Link from 'next/link';

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
            <Link
              href={{ pathname: `/mypage/competition`, query: { status: option.title } }}
              className={`flex h-[32px] flex-1 items-center justify-center text-body-2 ${compStatus === option.title ? 'border-b-[2px] border-primary-60 text-primary-60' : ''}`}
              key={index}
            >
              {option.title}
            </Link>
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
