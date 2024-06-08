import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BetCreateInput = {
  amount?: number | null;
  match?: MatchWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
