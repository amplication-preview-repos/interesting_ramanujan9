import { BetCreateNestedManyWithoutMatchesInput } from "./BetCreateNestedManyWithoutMatchesInput";

export type MatchCreateInput = {
  bets?: BetCreateNestedManyWithoutMatchesInput;
  date?: Date | null;
  result?: "Option1" | null;
  team1?: string | null;
  team2?: string | null;
};
