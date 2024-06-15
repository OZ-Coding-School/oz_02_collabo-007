import RecordSectionHeader from './RecordSectionHeader/RecordSectionHeader';
import { UserMatches } from '@/@types/record';
import MatchCard from '@/components/organism/CompetitionProgressPage/MatchCard';

const RecordSection = ({ matchData }: { matchData: UserMatches }) => {
  const { name, start, matchTypeDetails, tier, matches } = matchData;

  return (
    <>
      {matches.length !== 0 && (
        <div className="flex flex-col items-start gap-[12px] self-stretch">
          <RecordSectionHeader
            compName={name}
            date={start}
            category={matchTypeDetails}
            tier={tier}
          />

          <div className="flex w-full flex-col gap-[16px]">
            {matches.map((match, index) => (
              <MatchCard
                match={match}
                matchType={matchTypeDetails.type}
                totalSets={match.totalSets}
                key={index}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RecordSection;
