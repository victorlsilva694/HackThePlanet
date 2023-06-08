import { Transaction } from "./../Types/Dashboard";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export const dashboardApiRequests = () => ({
  insertTransaction: async (Transaction: Transaction) => {
    const response = await api.post("/api/dashboard/new/transaction", {
      transaction_name: Transaction.transactionName,
      user_id: Transaction.userId,
      passport: Transaction.passport,
      travel_code: Transaction.travelCode,
      covid_data: Transaction.covidData,
      price_values: Transaction.priceValues,
      warning_annotation: Transaction.warningAnnotation,
    });
    return response.data;
  },

  getAllTransactionsByUserId: async (userId: number) => {
    const response = await api.post(
      `http://127.0.0.1:8000/api/dashboard/getAll/transactions/${userId}`
    );
    return response.data;
  },
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post("/api/validate", { token });
    return response.data;
  },
  signin: async (email: string, password: string) => {
    const response = await api.post("/api/login", { email, password });
    return response.data;
  },
  logout: async () => {
    const response = await api.post("/logout");
    return response.data;
  },
});
