import { ImageFile } from './image';

export type ClubTeamUser = {
  id: number;
  username: string;
  imageUrl: ImageFile;
  team: { id: number; name: string; rank?: number; score?: string };
};

export type UserInfo = {
  id: number;
  username: string;
  phone: string;
  gender: 'male' | 'female';
  birth: number;
  tier: string | null;
  imageUrl: {
    [key: string]: string;
  } | null;

  club: Club | null;
  team: {
    [key: string]: string;
  } | null;
  ranking: {
    [key: string]: string | null;
  };
};
