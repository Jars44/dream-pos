"use client";

import { createContext, useContext, type ReactNode, useSyncExternalStore } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function useIsAuthenticated() {
  const subscribe = () => {
    window.addEventListener("storage", noop);
    return () => window.removeEventListener("storage", noop);
  };
  const getSnapshot = () => {
    return !!localStorage.getItem("dreamspos_auth_token");
  };
  const getServerSnapshot = () => {
    return false;
  };
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function noop() {}

export function AuthProvider({ children }: { children: ReactNode }) {
  const isAuthenticated = useIsAuthenticated();

  const login = async (email: string, password: string): Promise<boolean> => {
    if (email === "admin@gmail.com" && password === "admin") {
      const mockToken = "mock_jwt_token_" + Date.now();
      localStorage.setItem("dreamspos_auth_token", mockToken);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("dreamspos_auth_token");
  };

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
