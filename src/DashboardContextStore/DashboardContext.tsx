import { createContext } from "react";
import { INameDashboard, User } from "../Types/User";
import { Transaction } from "../Types/Dashboard";

export type DashboardContextType = {
  Transaction: Transaction | null;
  setTransaction: (Transaction: Transaction) => Promise<object>;
};

export const DashboardContext = createContext<DashboardContextType>(null!);
