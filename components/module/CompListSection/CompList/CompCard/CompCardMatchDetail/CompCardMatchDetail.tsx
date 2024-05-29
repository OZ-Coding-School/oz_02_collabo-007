import CompStatusInfo from '@/components/module/CompListSection/CompList/CompCard/CompStatusInfo/CompStatusInfo';
import NextMatchInfo from '../NextMatchInfo/NextMatchInfo';
import { CompetitionProps } from '@/@types/competition';

const CompCardMatchDetail = ({ compData }: CompetitionProps) => {
  return (
    <div className="rounded-[8px] bg-gray-20 p-[12px]">
      {compData.status === '진행 전' && (
        <NextMatchInfo nextMatchInfo={compData.nextMatch} status={compData.status} />
      )}
      {compData.status === '진행 중' && (
        <div>
          <CompStatusInfo compData={compData} />
          <div className="my-[12px] border-b-[1.5px] border-gray-30"></div>
          <NextMatchInfo nextMatchInfo={compData.nextMatch} />
        </div>
      )}
      {compData.status === '종료' && <CompStatusInfo compData={compData} />}
    </div>
  );
};

export default CompCardMatchDetail;
