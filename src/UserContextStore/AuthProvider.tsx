import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { INameDashboard, User } from "../Types/User";
import { useApi } from "../hooks/useApi";

interface childrenType {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<childrenType> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [nameDashboard, setNameDashboard] = useState<string>("MdDashboard");
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("token_ga_profile");
      if (storageData) {
        const data = await api.validateToken(storageData);
        if (data.decoded.name) {
          setUser({
            email: data.decoded.email,
            name: data.decoded.name,
            id: data.decoded.id,
          });
        }
      }
    };
    validateToken();
  }, [api]);

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if (data.email && data.token && data.username) {
      setUser({
        email: data.email,
        name: data.username,
        id: data.id,
      });
      setToken(data.token);
      return true;
    }
    return false;
  };

  const setterDashBoardName = (dashboardName: string) => {
    setNameDashboard(dashboardName);
    return dashboardName;
  };

  const signout = async () => {
    console.log("signout está sendo executada.");
    setUser(null);
    setToken("");
    await api.logout();
  };

  const setToken = (token: string) => {
    localStorage.setItem("token_ga_profile", token);
  };

  return (
    <AuthContext.Provider
      value={{ user, nameDashboard, setterDashBoardName, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
