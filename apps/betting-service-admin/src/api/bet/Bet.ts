import { Match } from "../match/Match";
import { User } from "../user/User";

export type Bet = {
  amount: number | null;
  createdAt: Date;
  id: string;
  match?: Match | null;
  updatedAt: Date;
  user?: User | null;
};
