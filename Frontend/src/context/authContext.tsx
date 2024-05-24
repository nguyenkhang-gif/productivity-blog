import { createContext, useContext, useState, ReactNode, FC } from "react";

// Define the shape of the Auth context
export interface AuthContextType {
  authUser: AuthUser | null;
  setAuthUser: (user: AuthUser | null) => void;
}

// Define the shape of the user object
export interface AuthUser {
  _id: string;
  fullName: string;
  username: string;
  profilePic: string;
}

// Create the AuthContext with an initial value
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};

// Define props for the AuthContextProvider component
export interface AuthContextProviderProps {
  children: ReactNode;
}

// Create the AuthContextProvider component
export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(
    JSON.parse(localStorage.getItem("chat-user") || "null")
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
