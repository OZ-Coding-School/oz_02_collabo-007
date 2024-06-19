import CheckIcon from '@/app/_asset/icons/check.svg';
import type { RankingWithoutImage } from '@/@types/ranking';
import { cn } from '@/lib/utils/cn';
import { GenderKey, MatchTypeKey } from '@/@types/competition';
import { printMatchTypeInfo } from '@/lib/utils/printMatchTypeInfo';

const RankingButton = ({
  rankingData,
  mainRanking,
  gender,
  type,
  isClicked,
}: {
  rankingData: RankingWithoutImage[] | null;
  mainRanking: boolean;
  gender: GenderKey;
  type: MatchTypeKey;
  isClicked: boolean;
}) => {
  const assignTier = () => {
    if (!rankingData) return '미정';
    if ('team' in rankingData[0]) return rankingData[0].team.name;
    return rankingData[0].tier.name;
  };

  return (
    <div
      className={cn(
        'flex w-full justify-between rounded-[8px] border-[1px] border-gray-30 p-[16px] text-gray-60',
        `${isClicked && 'border-primary-60 text-gray-80'}`,
      )}
    >
      <div className="flex flex-col gap-[8px]">
        {type === 'team' ? '팀 \u00B7 ' : `${printMatchTypeInfo(gender, type)} \u00B7 `}
        {assignTier()}
        <div
          className={cn(
            'text-[20px] font-[700] leading-[28px]',
            `${isClicked && 'text-primary-60'}`,
          )}
        >
          {rankingData ? `${rankingData[0].rank}위` : '미정'}
        </div>
      </div>
      {mainRanking && (
        <div className="flex items-center gap-[4px]">
          <CheckIcon width={18} height={18} fill="#FC5214" />
          <div className="text-sub-headline-2 text-primary-60">선택됨</div>
        </div>
      )}
    </div>
  );
};

export default RankingButton;
