import { ImageFile } from './image';

export type Club = {
  id: number;
  name: string;
  address: string;
  imageUrl: ImageFile;
  phone: string;
  description: string;
};

export type ClubCoach = {
  id: number;
  user: ClubUser;
  club: number;
};

export type ClubTeam = {
  id: number;
  name: string;
  imageUrl: ImageFile;
};

export type TennisClubData = {
  club: Club;
  coaches: ClubCoach[];
  teams: ClubTeam[];
  users: ClubTeamUser[];
};

export type SimpleClubData = {
  id: number;
  name: string;
  address: string;
  imageUrl: ImageFile;
};

export interface ClubItemProps {
  name: string;
  address: string;
  image: ImageFile;
  displayMode?: boolean;
  handleDelete?: Dispatch<SetStateAction<SimpleClubData | null>>;
}
