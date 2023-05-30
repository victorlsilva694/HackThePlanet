import axios from "axios";
import React, { createContext, useState } from "react";
import { useEffect } from "react";

interface UserContextData {
  id: number | null;
  setId: (id: number | null) => void;
  nameDashboard: string | null;
  setNameDashboard: (nameDashboard: string | null) => void;
  userEmail: string | null;
  setUserEmail: (email: string | null) => void;
  userDataName: string | null;
  setUserDataName: (name: string | null) => void;
  authenticateUserData: (emailParam: string, passwordParam: string) => void;
}

interface childrenType {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextData>({
  id: null,
  setId: () => {},
  nameDashboard: null,
  setNameDashboard: () => {},
  userEmail: null,
  setUserEmail: (email) => {},
  userDataName: null,
  setUserDataName: (username) => {},
  authenticateUserData: (emailParam: string, passwordParam: string) => {},
});

interface LoginResponse {
  username: string;
  token: string;
  email: string;
}

const UserContextProvider: React.FC<childrenType> = ({ children }) => {
  const [id, setId] = useState<number | null>(null);
  const [nameDashboard, setNameDashboard] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userDataName, setUserDataName] = useState<string | null>(null);

  async function authenticateUserData(
    emailParam: string,
    passwordParam: string
  ) {
    try {
      const response = await axios.post<LoginResponse>(
        "http://localhost:8000/api/login",
        { email: emailParam, password: passwordParam }
      );
      const { username, email, token } = response.data;

      setUserDataName(username);
      setUserEmail(email);
      localStorage.setItem("token_ga_profile", token);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <UserContext.Provider
      value={{
        id,
        authenticateUserData,
        setId,
        nameDashboard,
        setNameDashboard,
        userEmail,
        setUserEmail,
        userDataName,
        setUserDataName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
