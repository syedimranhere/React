// ✅ usercontext.jsx
import { createContext, useContext, useState } from "react";

const userContext = createContext();

export const useMyContext = () => useContext(userContext);

export const UserProvider = ({ children }) => {
  const [User, SetUser] = useState({});

  return (
    <userContext.Provider value={{ User, SetUser }}>
      {children}
    </userContext.Provider>
  );
};
