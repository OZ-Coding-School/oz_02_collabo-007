import { Match } from './competition';

export interface Record {
  id: number;
  username: string;
  userRecord: { wins: number; losses: number };
  userMatches: UserMatches[];
}

export interface UserMatches {
  name: string;
  matchTypeDetails: { gender: string; type: string };
  tier: string;
  start: string;
  matches: Match[];
}
