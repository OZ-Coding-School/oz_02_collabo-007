import CompStatusInfo from '../CompStatusInfo/CompStatusInfo';
import NextMatchInfo from '../NextMatchInfo/NextMatchInfo';
import type { MyCompData } from '@/@types/competition';

const CompCardMatchDetail = ({ compData }: { compData: MyCompData }) => {
  return (
    <div className="rounded-[8px] bg-gray-20 p-[12px]">
      {compData.status === 'before' && (
        <NextMatchInfo matches={compData.matches} status={compData.status} />
      )}
      {compData.status === 'during' && (
        <div className="flex flex-col gap-[12px]">
          <CompStatusInfo compData={compData} />
          <div className="border-b-[1.5px] border-gray-30"></div>
          <NextMatchInfo matches={compData.matches} />
        </div>
      )}
      {compData.status === 'ended' && <CompStatusInfo compData={compData} />}
    </div>
  );
};

export default CompCardMatchDetail;
