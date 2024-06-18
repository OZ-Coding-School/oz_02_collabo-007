import { GENDER, MATCH_TYPE } from '@/constants/competition';
import { UserData } from './user';

type CompetitionBase = {
  id: number;
  name: string;
  startDate: string;
  tier: string;
  matchTypeDetails: MatchTypeDetails;
  location: string;
  imageUrl: string;
  status: string;
};

export type Competition = CompetitionBase & {
  waitingCount: number;
  endData: string;
  nextMatch?: NextMatchInfo;
  category?: 'before' | 'during' | 'ended';
};

export type CompetitionDetails = CompetitionBase & {
  waitingCount: number;
  totalRounds: number;
  totalSets: number;
  address: string;
  description: string;
  rule: string;
  phone: string;
  siteLink: string;
};

export type MyCompetition = CompetitionBase & {
  totalRounds: number;
  totalSets: number;
  address: string | null;
  description: string;
  rule: string;
  phone: string | null;
  siteLink: string;
  applyStatus: string;
  myteam: string[];
  matchStatus: string | null;
  matches: Matches;
};

export type CompetitionResult = {
  competition: number;
  competitionName: string;
  matchTypeDetails: MatchTypeDetails;
  tier: string;
  winner: number;
  winnerParticipants: {
    username: string;
    imageUrl: string | null;
    clubName: string | null;
  }[];
  runnerUp: number;
  runnerUpParticipants: {
    username: string;
    imageUrl: string | null;
    clubName: string | null;
  }[];
};

export type NextMatchInfo = {
  id: string | null;
  teammate: [{ id: string; name: string }, { id: string; name: string }];
  opponent: [{ id: string; name: string }, { id: string; name: string }] | null;
  court: string | null;
  round: number;
};

type MatchBase = {
  id: number;
  matchRound: number;
  matchNumber: number;
  courtNumber: number;
};

export type Matches = MatchBase & {
  winnerName: string[];
  opponentUser: string[];
};

export type Match = MatchBase & {
  totalSets: number;
  description: string;
  winnerUser?: UserData[];
  aTeamUsers?: UserData[];
  bTeamUsers?: UserData[];
  sets?: Set[];
};

export type Set = {
  id: number;
  setNumber: number;
  aScore: number;
  bScore: number;
};

type MatchTypeDetails = {
  gender: GenderKey;
  type: MatchTypeKey;
};

export type CompCategory = {
  title: string;
  gender?: 'male' | 'female' | 'mix' | 'team' | 'all';
  type?: 'single' | 'double' | 'team' | 'all';
};

type CompStatusButtonContentKey = keyof typeof CompStatusButtonContent;

export type CompStatusButtonContentItem = {
  label: string;
  variant: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  colors: 'default' | 'gray';
  endPoint: string;
};

export type GenderKey = keyof typeof GENDER;

export type MatchTypeKey = keyof typeof MATCH_TYPE;
