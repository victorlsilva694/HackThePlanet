import React, { createContext, useContext } from 'react';
import axios, { AxiosInstance } from 'axios';
import axiosInstance from './axiosInstance';

interface AxiosProviderProps {
  children: React.ReactNode;
}

interface AxiosContextValue {
  axiosInstance: AxiosInstance;
}

const AxiosContext = createContext<AxiosContextValue>({
  axiosInstance: axiosInstance,
});

export function useAxios() {
  return useContext(AxiosContext);
}

export function AxiosProvider({ children }: AxiosProviderProps) {
  return (
    <AxiosContext.Provider value={{ axiosInstance }}>
      {children}
    </AxiosContext.Provider>
  );
}