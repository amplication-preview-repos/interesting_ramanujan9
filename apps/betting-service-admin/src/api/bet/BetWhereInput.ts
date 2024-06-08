import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BetWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  match?: MatchWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
