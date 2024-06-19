import { MatchTypeKey } from './competition';

export type UserRanking = UserRankingWithoutImage & {
  imageUrl: string | null;
};

export type TeamRanking = TeamRankingWithoutImage & {
  imageUrl: string | null;
  club: { id: number; name: string };
};

export type UserRankingWithoutImage = {
  rank: number;
  totalPoints: number;
  user: { id: number; username: string };
  tier: { id: number; name: string; matchTypeDetails: { gender: string; type: string } };
  club: { id: number; name: string } | null;
};

export type TeamRankingWithoutImage = {
  rank: number;
  totalPoints: number;
  team: { id: number; name: string };
};

export type Ranking = TeamRanking | UserRanking;

export type RankingWithoutImage = UserRankingWithoutImage | TeamRankingWithoutImage;

export type MyProfileRanking = {
  mainRanking: MatchTypeKey | null;
  single: UserRankingWithoutImage[] | null;
  double: UserRankingWithoutImage[] | null;
  team: TeamRankingWithoutImage[] | null;
};
