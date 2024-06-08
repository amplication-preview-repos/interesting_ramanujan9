import { BetUpdateManyWithoutMatchesInput } from "./BetUpdateManyWithoutMatchesInput";

export type MatchUpdateInput = {
  bets?: BetUpdateManyWithoutMatchesInput;
  date?: Date | null;
  result?: "Option1" | null;
  team1?: string | null;
  team2?: string | null;
};
