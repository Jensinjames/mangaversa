import React, { createContext, useReducer } from 'react';
import { auth } from '../services/auth';

export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (username, password) => {
    try {
      const response = await auth.login(username, password);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  const signup = async (username, password) => {
    try {
      const response = await auth.signup(username, password);
      dispatch({ type: 'SIGNUP_SUCCESS', payload: response });
    } catch (error) {
      dispatch({ type: 'SIGNUP_FAILURE' });
    }
  };

  const logout = () => {
    auth.logout();
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};