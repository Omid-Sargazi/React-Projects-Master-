import { createContext, useContext, useState } from "react";
const UserContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState("Ali");

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, logout }}>
      {children}
    </UserContext.Provider>
  );
}
