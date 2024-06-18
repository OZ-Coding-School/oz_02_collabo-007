import { ImageFile } from './image';
import { ClubTeamUser } from './user';

export type Team = {
  id: number;
  name: string;
  description: string;
  imageUrl: string | null;
};

export type TennisTeamData = {
  team: Team;
  teamRanking: {
    rank: number;
    totalPoints: number;
    team: { id: number; name: string };
  }[];
  users: ClubTeamUser[];
};
