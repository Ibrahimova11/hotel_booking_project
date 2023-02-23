import React, { createContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  loading: false,
  error: null,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, loading: false, user: action.payload };
    case 'LOGIN_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
