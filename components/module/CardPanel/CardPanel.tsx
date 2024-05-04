import CompetitionStatusPanel from '@/components/core/CompetitionStatusPanel/CompetitionStatusPanel';
import NextMatchInfoPanel from '@/components/core/NextMatchInfoPanel/NextMatchInfoPanel';

const CardPanel = ({ compInfo }: any) => {
  return (
    <div className="rounded-[8px] bg-gray-20 p-[12px]">
      {compInfo.status === '진행 전' && (
        <NextMatchInfoPanel nextMatchInfo={compInfo.nextMatch} status={compInfo.status} />
      )}
      {compInfo.status === '진행 중' && (
        <div>
          <CompetitionStatusPanel compInfo={compInfo} />
          <div className="my-[12px] border-b-[1.5px] border-gray-30"></div>
          <NextMatchInfoPanel nextMatchInfo={compInfo.nextMatch} />
        </div>
      )}
      {compInfo.status === '종료' && <CompetitionStatusPanel compInfo={compInfo} />}
    </div>
  );
};

export default CardPanel;
