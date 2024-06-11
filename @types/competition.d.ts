import { UserData } from './user';

export interface Competition {
  id: number;
  name: string;
  startDate: string;
  endData: string;
  matchTypeDetails: {
    gender: 'female' | 'male' | 'mix';
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
  compData: Competition | MyCompData;
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

type CompCategory = {
  title: string;
  gender?: 'male' | 'female' | 'mix' | 'team' | 'all' | undefined;
  type?: 'single' | 'double' | 'team' | 'all' | undefined;
};

export interface Match {
  id: number;
  matchRound: number;
  matchNumber: number;
  courtNumber: number;
  totalSets: number;
  description: string;
  winnerUser?: UserData[];
  aTeamUsers?: UserData[];
  bTeamUsers?: UserData[];
  sets?: Set[];
}

export type Set = {
  id: number;
  setNumber: number;
  aScore: number;
  bScore: number;
};

export type MyCompData = {
  id: number;
  name: string;
  startDate: string;
  tier: string;
  matchTypeDetails: { gender: string; type: string };
  totalRounds: number;
  totalSets: number;
  location: string | null;
  address: string | null;
  description: string;
  rule: string;
  phone: string | null;
  siteLink: string;
  imageUrl: string | null;
  status: string;
  applyStatus: string;
  matches: Matches | null;
};

export type Matches = {
  id: number;
  matchround: number;
  matchnumber: number;
  courtnumber: number;
  winnerName: string[];
  aTeamUser: string[];
  bTeamUser: string[];
};
