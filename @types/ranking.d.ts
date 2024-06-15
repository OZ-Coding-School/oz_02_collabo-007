export interface UserRanking {
  rank: number;
  totalPoints: number;
  user: { id: number; username: string };
  tier: { id: number; name: string; matchTypeDetails: { gender: string; type: string } };
  club: { id: number; name: string } | null;
  imageUrl: string | null;
}
