import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BetUpdateInput = {
  amount?: number | null;
  match?: MatchWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
