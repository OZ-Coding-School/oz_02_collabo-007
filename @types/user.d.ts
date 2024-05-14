import { Club } from './club';
import { ImageFile } from './image';
import { Team } from './team';

export type ClubTeamUser = {
  id: number;
  username: string;
  imageUrl: ImageFile;
  team: { id: number; name: string; rank?: number; score?: string };
};

export type UserData = {
  id: number;
  phone: string;
  username: string;
  gender: string;
  birth: number;
  imageUrl: ImageFile;
  club: Club | null;
  team: Team | null;
};
