import { ImageFile } from './image';

export type ClubTeamUser = {
  id: number;
  username: string;
  imageUrl: ImageFile;
  team: { id: number; name: string; rank?: number; score?: string };
};
