import CompetitionStatusPannel from '@/components/core/CardPannelContent.tsx/CompetitionStatusPannel';
import NextMatchInfoPannel from '@/components/core/CardPannelContent.tsx/NextMatchInfoPannel';
import CompCard from '@/components/organism/CompCard/CompCard';

const CardPannel = ({ compInfo }: any) => {
  return (
    <div className="rounded-[8px] bg-gray-20 p-[12px]">
      {compInfo.status === '진행 전' && (
        <NextMatchInfoPannel
          nextMatchInfo={compInfo.nextMatch}
          status={compInfo.status}
        />
      )}
      {compInfo.status === '진행 중' && (
        <div>
          <CompetitionStatusPannel compInfo={compInfo} />
          <div className="my-[12px] border-b-[1.5px] border-gray-30"></div>
          <NextMatchInfoPannel nextMatchInfo={compInfo.nextMatch} />
        </div>
      )}
      {compInfo.status === '종료' && <CompetitionStatusPannel compInfo={compInfo} />}
    </div>
  );
};

export default CardPannel;
