import React, { createContext, useState, useEffect } from "react";
// import Cookies from "js-cookie";

interface AuthContextProps {
  // isAuthenticated: boolean;
  token: string;
}

const defaultAuthContext = {
  // isAuthenticated: false,
  token: "",
} as AuthContextProps;

export const AuthContext = createContext<AuthContextProps>(defaultAuthContext);

type UserProviderProps = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: UserProviderProps) {
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const hash = window.location.hash;
    console.log('hash', hash.split("&")[0].split("=")[1]);
    setToken(hash.split("&")[0].split("=")[1]);
    // setIsAuthenticated(!!token);
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>
      {children}
    </AuthContext.Provider>
  );
};

