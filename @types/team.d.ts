export type Team = {
  id: number;
  name: string;
  description: string;
  imageUrl: { imageUrl: string } | null;
};

export type TennisTeamData = {
  team: Team;
  users: ClubTeamUser[];
};
