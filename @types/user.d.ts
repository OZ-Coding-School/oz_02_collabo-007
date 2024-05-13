export type ClubTeamUser = {
  id: number;
  username: string;
  imageUrl: { imageUrl: string } | null;
  team: { id: number; name: string; rank?: number; score?: string };
};
