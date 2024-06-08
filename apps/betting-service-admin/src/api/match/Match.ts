import { Bet } from "../bet/Bet";

export type Match = {
  bets?: Array<Bet>;
  createdAt: Date;
  date: Date | null;
  id: string;
  result?: "Option1" | null;
  team1: string | null;
  team2: string | null;
  updatedAt: Date;
};
