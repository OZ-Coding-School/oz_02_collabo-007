export interface Competition {
  id: number;
  name: string;
  startDate: string;
  endData: string;
  matchTypeDetails: {
    gender: 'female' | 'male' | 'mix' | 'team';
    type: 'single' | 'double' | 'team';
  };
  tier: string;
  location: string;
  imageUrl: string;
  status: string;
  waitingCount: number;
  nextMatch?: NextMatchInfo;
}

export interface CompetitionProps {
  compInfo: Competition;
}

export type NextMatchInfo = {
  id: string | null;
  teammate: [{ id: string; name: string }, { id: string; name: string }];
  opponent: [{ id: string; name: string }, { id: string; name: string }] | null;
  court: string | null;
  round: number;
};

type ImageType = {
  src: string;
  height: number;
  width: number;
  blurDataURL: string;
  blurWidth: number;
  blurHeight: number;
};
