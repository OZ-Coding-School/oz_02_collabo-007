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
  users: ClubTeamUser[];
};
