import React, { createContext, useState } from 'react';

interface UserContextData {
  id: number | null;
  setId: (id: number | null) => void;
  nameDashboard:  string | null;
  setNameDashboard: (nameDashboard: string | null) => void;
}

interface childrenType {
    children: React.ReactNode;
  }

export const UserContext = createContext<UserContextData>({
  id: null,
  setId: () => {},
  nameDashboard: null,
  setNameDashboard: () => {},
});

const UserContextProvider: React.FC<childrenType> = ({ children }) => {
  const [id, setId] = useState<number | null>(null);
  const [nameDashboard, setNameDashboard] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ id, setId, nameDashboard, setNameDashboard }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
