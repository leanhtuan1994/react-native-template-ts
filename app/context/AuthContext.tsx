import React from 'react';

type AuthContextType = {
  loading: boolean;
};

const AuthContext = React.createContext<AuthContextType | string>(
  'useAuth should be used inside AuthProvider',
);

export const AuthProvider: React.FC = ({ children }) => {
  const [loading] = React.useState(false);

  const value: AuthContextType = {
    loading,
  };

  return <AuthContext.Provider {...{ value, children }} />;
};

export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (typeof context === 'string') {
    throw new Error(context);
  }
  return context;
};
