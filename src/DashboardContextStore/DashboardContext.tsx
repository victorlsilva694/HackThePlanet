import { createContext } from "react";
import { INameDashboard, User } from "../Types/User";
import { Transaction } from "../Types/Dashboard";

interface ITransactionObjectData {
  transactionName: string;
  passport: string;
  userId: number;
  travelCode: string;
  covidData: string;
  priceValues: string;
  warningAnnotation: string;
}
export type DashboardContextType = {
  Transaction: Transaction | null;
  setTransaction: (Transaction: ITransactionObjectData) => Promise<object>;
};

export const DashboardContext = createContext<DashboardContextType>(null!);
