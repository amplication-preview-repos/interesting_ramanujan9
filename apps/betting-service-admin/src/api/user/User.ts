import { Bet } from "../bet/Bet";
import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";

export type User = {
  balance: number | null;
  bets?: Array<Bet>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
};
