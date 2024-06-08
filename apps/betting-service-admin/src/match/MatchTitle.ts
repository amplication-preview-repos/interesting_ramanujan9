import { Match as TMatch } from "../api/match/Match";

export const MATCH_TITLE_FIELD = "team1";

export const MatchTitle = (record: TMatch): string => {
  return record.team1?.toString() || String(record.id);
};
