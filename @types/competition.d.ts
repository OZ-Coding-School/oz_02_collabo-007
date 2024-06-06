export interface Competition {
  id: number;
  name: string;
  startDate: string;
  endData: string;
  matchTypeDetails: {
    gender: 'female' | 'male' | 'mix' | null;
    type: 'single' | 'double' | 'team';
  };
  tier: string;
  location: string;
  imageUrl: string;
  status: string;
  waitingCount: number;
  nextMatch?: NextMatchInfo;
  [key: string]: string | number;
}

export interface CompetitionProps {
  compData: Competition;
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

export type CompDetailInfo = {
  id: number;
  name: string;
  startDate: string;
  tier: string;
  matchTypeDetails: { gender: string; type: string };
  totalRounds: number;
  totalSets: null;
  location: string;
  address: string;
  description: string;
  rule: string;
  phone: string;
  siteLink: string;
  imageUrl: string | null;
  status: string;
  waitingCount: number;
};

interface CompStatusButtonContent {
  [key: string]: {
    label: string;
    variant: 'primary' | 'secondary' | 'tertiary' | 'ghost';
    size: 'sm' | 'md' | 'lg';
    colors: 'default' | 'gray';
    endPoint: string;
  };
}
