import { createContext } from 'react';
import { INameDashboard, User } from '../Types/User';

export type AuthContextType = {
    user: User | null;
    nameDashboard: string;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
    setterDashBoardName: (nameDashboard: string) => string;
}

export const AuthContext = createContext<AuthContextType>(null!);