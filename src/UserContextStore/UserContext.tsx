import React, { createContext, useState } from "react";

interface UserContextData {
  id: number | null;
  setId: (id: number | null) => void;
  nameDashboard: string | null;
  setNameDashboard: (nameDashboard: string | null) => void;
  email: string | null;
  setEmail: (email: string | null) => void;
  userName: string | null;
  setUserName: (name: string | null) => void;
}

interface childrenType {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextData>({
  id: null,
  setId: () => {},
  nameDashboard: null,
  setNameDashboard: () => {},
  email: null,
  setEmail: () => {},
  userName: null,
  setUserName: () => {},
});

const UserContextProvider: React.FC<childrenType> = ({ children }) => {
  const [id, setId] = useState<number | null>(null);
  const [nameDashboard, setNameDashboard] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  return (
    <UserContext.Provider
      value={{
        id,
        setId,
        nameDashboard,
        setNameDashboard,
        email,
        setEmail,
        userName,
        setUserName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
