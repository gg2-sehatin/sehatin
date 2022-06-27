import React, { createContext, useState } from 'react';

export interface IAuthContext {
  accessToken: string;
  name: string;
  id: number;
  email: string;
  role: string;
}

const authContextDefault: IAuthContext = {
  accessToken: '',
  id: 0,
  name: '',
  email: '',
  role: '',
}

type AuthContextValueType = {
  auth : IAuthContext;
  setAuth?: React.Dispatch<React.SetStateAction<IAuthContext>>
}

const AuthContext = createContext<AuthContextValueType>({auth : authContextDefault});

type AuthProviderType = {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderType) => {

  const [auth, setAuth] = useState<IAuthContext>(authContextDefault);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
