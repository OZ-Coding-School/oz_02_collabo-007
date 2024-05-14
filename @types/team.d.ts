import { ImageFile } from './image';
import { ClubTeamUser } from './user';

export type Team = {
  id: number;
  name: string;
  description: string;
  imageUrl: ImageFile;
};

export type TennisTeamData = {
  team: Team;
  users: ClubTeamUser[];
};
