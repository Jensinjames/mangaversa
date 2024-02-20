import React from 'react';

interface AuthState {
  isAuthenticated: boolean;
  user: null | object;
}

interface AuthContextProps {
  state: AuthState;
  dispatch: React.Dispatch<any>;
}

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);

export default AuthContext;