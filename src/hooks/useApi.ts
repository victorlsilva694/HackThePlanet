import { Transaction } from "./../Types/Dashboard";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export const dashboardApiRequests = () => ({
  insertTransaction: async (Transaction: Transaction) => {
    const response = await api.post("/api/dashboard/new/transaction", {
      transaction_name: Transaction.transaction_name,
      user_id: Transaction.user_id,
      passport: Transaction.passport,
      travel_code: Transaction.travel_code,
      covid_data: Transaction.covid_data,
      price_values: Transaction.price_values,
      warning_annotation: Transaction.warning_annotation,
    });
    return response.data;
  },

  deleteUserFilesById: async (name: string, id: number, username: string, user_id: number) => {
    const response = await api.get(`/api/dashboard/delete/file/${name}/${id}/${username}/${user_id}`);
    return response.data;
  },

  getAllTransactionsByUserId: async (userId: number) => {
    const response = await api.get(
      `http://127.0.0.1:8000/api/dashboard/getAll/transactions/${userId}`
    );
    return response.data;
  },

  getAllFilesByUserId: async (userId: number) => {
    const response = await api.get(
      `http://127.0.0.1:8000/api/dashboard/getAll/files/${userId}`
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
