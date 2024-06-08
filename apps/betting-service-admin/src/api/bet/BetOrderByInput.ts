import { SortOrder } from "../../util/SortOrder";

export type BetOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  matchId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
