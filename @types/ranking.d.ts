export type UserRanking = {
  rank: number;
  totalPoints: number;
  user: { id: number; username: string };
  tier: { id: number; name: string; matchTypeDetails: { gender: string; type: string } };
  club: { id: number; name: string } | null;
  imageUrl: string | null;
};

export type TeamRanking = {
  rank: number;
  totalPoints: number;
  team: { id: number; name: string };
  club: { id: number; name: string };
  imageUrl: string | null;
};

export type Ranking = TeamRanking | UserRanking;
