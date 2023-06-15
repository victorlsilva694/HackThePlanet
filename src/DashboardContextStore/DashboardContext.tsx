import { createContext } from "react";
import { INameDashboard, User } from "../Types/User";
import { Transaction } from "../Types/Dashboard";

interface ITransactionObjectData {
  transaction_name: string;
  passport: string;
  user_id: number;
  travel_code: string;
  covid_data: string;
  price_values: string;
  warning_annotation: string;
}
export type DashboardContextType = {
  Transaction: Transaction | null;
  setTransaction: (Transaction: ITransactionObjectData) => Promise<object>;
};

export const DashboardContext = createContext<DashboardContextType>(null!);
