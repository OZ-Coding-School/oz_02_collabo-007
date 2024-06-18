import CompStatusInfo from '../CompStatusInfo/CompStatusInfo';
import NextMatchInfo from '../NextMatchInfo/NextMatchInfo';
import type { MyCompetition } from '@/@types/competition';

const CompCardMatchDetail = ({ compData }: { compData: MyCompetition }) => {
  return (
    <div className="rounded-[8px] bg-gray-20 p-[12px]">
      {compData.status === 'before' && <NextMatchInfo compData={compData} />}
      {compData.status === 'during' && (
        <div className="flex flex-col gap-[12px]">
          <CompStatusInfo compData={compData} />
          <div className="border-b-[1.5px] border-gray-30"></div>
          <NextMatchInfo compData={compData} />
        </div>
      )}
      {compData.status === 'ended' && <CompStatusInfo compData={compData} />}
    </div>
  );
};

export default CompCardMatchDetail;
