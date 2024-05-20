import CompStatusInfo from '@/components/module/CompListSection/CompList/CompCard/CompStatusInfo/CompStatusInfo';
import NextMatchInfo from '../NextMatchInfo/NextMatchInfo';

const CompCardMatchDetail = ({ compInfo }: any) => {
  return (
    <div className="rounded-[8px] bg-gray-20 p-[12px]">
      {compInfo.status === '진행 전' && (
        <NextMatchInfo nextMatchInfo={compInfo.nextMatch} status={compInfo.status} />
      )}
      {compInfo.status === '진행 중' && (
        <div>
          <CompStatusInfo compInfo={compInfo} />
          <div className="my-[12px] border-b-[1.5px] border-gray-30"></div>
          <NextMatchInfo nextMatchInfo={compInfo.nextMatch} />
        </div>
      )}
      {compInfo.status === '종료' && <CompStatusInfo compInfo={compInfo} />}
    </div>
  );
};

export default CompCardMatchDetail;
