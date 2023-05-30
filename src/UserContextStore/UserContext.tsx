import React, { createContext, useState } from "react";

interface UserContextData {
  id: number | null;
  setId: (id: number | null) => void;
  nameDashboard: string | null;
  setNameDashboard: (nameDashboard: string | null) => void;
  userEmail: string | null;
  setterUserName: (userNameData: string) => void;
  setUserEmail: (email: string | null) => void;
  userDataName: string | null;
  setterUserMail: (setterUserMail: string) => void;
  setUserDataName: (name: string | null) => void;
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
  setterUserMail: (setterUserMail) => {},
  setUserEmail: (email) => {},
  userDataName: null,
  setterUserName: (userNameData) => {},
  setUserDataName: (username) => {},
});

const UserContextProvider: React.FC<childrenType> = ({ children }) => {
  const [id, setId] = useState<number | null>(null);
  const [nameDashboard, setNameDashboard] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userDataName, setUserDataName] = useState<string | null>(null);


  const setterUserMail = (userMail: string) => {
    setUserEmail(userMail);
    console.log(userEmail)
  };

  const setterUserName = (userName: string) => {
    setUserDataName(userName);
    console.log(userDataName)
  };

  return (
    <UserContext.Provider
      value={{
        id,
        setterUserName,
        setId,
        nameDashboard,  
        setNameDashboard,
        userEmail,
        setUserEmail,
        userDataName,
        setUserDataName,
        setterUserMail
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
