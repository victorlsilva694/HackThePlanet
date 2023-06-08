import { useEffect, useState } from "react";
import { DashboardContext } from "./DashboardContext";
import { Transaction } from "../Types/Dashboard";
import { dashboardApiRequests, useApi } from "../hooks/useApi";

interface childrenType {
  children: React.ReactNode;
}

export const DashboardProvider: React.FC<childrenType> = ({ children }) => {
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const requestDashboard = dashboardApiRequests();

  const handleSetTransaction = async (newTransaction: Transaction) => {
    const trasactionResponse = await requestDashboard.insertTransaction(
      newTransaction
    );
    return trasactionResponse;
  };

  return (
    <DashboardContext.Provider
      value={{
        Transaction: transaction,
        setTransaction: handleSetTransaction,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
