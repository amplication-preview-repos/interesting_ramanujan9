import { BetCreateNestedManyWithoutUsersInput } from "./BetCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  balance?: number | null;
  bets?: BetCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
};
