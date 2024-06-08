import { BetListRelationFilter } from "../bet/BetListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MatchWhereInput = {
  bets?: BetListRelationFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  result?: "Option1";
  team1?: StringNullableFilter;
  team2?: StringNullableFilter;
};
