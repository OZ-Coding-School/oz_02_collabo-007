import MatchResultCard from '@/components/module/MatchResultCard/MatchResultCard';
import { FC } from 'react';
import RecordSectionHeader from './RecordSectionHeader/RecordSectionHeader';

interface Props {
  matchData: {
    id: number;
    compName: string;
    date: string;
    category: string;
    tier: string;
    matches: {
      court: number;
      winner: {
        users: { name: string }[];
        scores: string[];
      };
      loser: {
        users: { name: string }[];
        scores: string[];
      };
    }[];
  };
}

const RecordSection: FC<Props> = ({ matchData }) => {
  const { compName, date, category, tier, matches } = matchData;

  return (
    <div className="flex flex-col items-start gap-[12px] self-stretch">
      <RecordSectionHeader
        compName={compName}
        date={date}
        category={category}
        tier={tier}
      />

      {matches.map((match, index) => (
        <MatchResultCard match={match} key={index} />
      ))}
    </div>
  );
};

export default RecordSection;
