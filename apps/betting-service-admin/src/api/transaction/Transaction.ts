import { User } from "../user/User";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
