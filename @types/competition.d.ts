export interface Competition {
  id: string;
  name: string;
  image: ImageType;
  date: string;
  location: string;
  category: string;
  tier: { name: string };
  status: string;
  nextMatch?: NextMatchInfo | null;
  waiting?: boolean | null;
}

export interface CompetitionProps {
  compInfo: Competition;
}

export type NextMatchInfo = {
  id: string | null;
  teammate: [{ id: string; name: string }, { id: string; name: string }];
  opponent: [{ id: string; name: string }, { id: string; name: string }] | null;
  court: string | null;
  round: number;
};

type ImageType = {
  src: string;
  height: number;
  width: number;
  blurDataURL: string;
  blurWidth: number;
  blurHeight: number;
};
