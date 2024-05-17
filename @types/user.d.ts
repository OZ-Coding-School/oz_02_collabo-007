import { Club } from './club';
import { ImageFile } from './image';
import { Team } from './team';

export type ClubTeamUser = {
  id: number;
  username: string;
  imageUrl: string | null;
  team: { id: number; name: string; rank?: number; score?: string };
};

export type UserData = {
  id: number;
  phone: string;
  username: string;
  gender: string;
  birth: number;
  imageUrl: string | null;
  tier?: string | null;
  club: Club | null;
  team: Team | null;
  ranking?: {
    [key: string]: string | null;
  };
};
