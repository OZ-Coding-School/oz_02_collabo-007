import { Club } from './club';
import { GenderKey } from './competition';
import { ImageFile } from './image';
import { Team } from './team';

export type ClubTeamUser = {
  id: number;
  username: string;
  imageUrl: string | null;
  team: { id: number; name: string } | null;
};

export type UserData = {
  id: number;
  phone: string;
  username: string;
  gender: GenderKey;
  birth: number;
  imageUrl: string | null;
  tiers?:
    | {
        id: number;
        name: string;
        matchTypeDetail: MatchTypeDetails;
      }[]
    | null;
  club: Club | null;
  team: Team | null;
  ranking?: {
    [key: string]: string | null;
  };
};

export type PartnerData = {
  id: number;
  username: string;
  imageUrl: string | null;
  club: Club | null;
  applicationStatus: boolean;
};
