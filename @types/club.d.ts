import { ImageFile } from './image';
import { ClubTeamUser } from './user';

export type ClubSearchData = {
  id: number;
  name: string;
  address: string;
  imageUrl: string | null;
  phone?: string;
  description?: string;
};

export type Club = ClubSearchData & {
  phone: string;
  description: string;
  status?: string;
  dateApplied?: string;
};

export type ClubCoach = {
  id: number;
  user: ClubTeamUser;
  club: number;
};

export type ClubTeam = {
  id: number;
  name: string;
  imageUrl: string | null;
};

export type TennisClubData = {
  club: Club;
  coaches: ClubCoach[];
  teams: ClubTeam[];
  users: ClubTeamUser[];
};
