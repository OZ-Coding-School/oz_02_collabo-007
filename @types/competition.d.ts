export interface Competition {
  id: string;
  name: string;
  image: string;
  date: string;
  location: string;
  category: string;
  tier: {
    id: string;
    name: string;
  };
  status: string;
  waiting: boolean;
}

export interface MyCompetition {
  id: string;
  name: string;
  image: string;
  date: string;
  location: string;
  category: string;
  tier: { name: string };
  status: string;
  nextMatch: {
    id: null;
    teammate: [{ id: string; name: string }, { id: string; name: string }];
    opponent: [{ id: string; name: string }, { id: string; name: string }];
    court: string;
    round: number;
  };
}
