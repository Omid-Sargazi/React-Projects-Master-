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


function UserInfo() {
  const { user, logout } = useContext(UserContext);

  if (!user) return <p>Not logged in</p>;

  return (
    <>
      <p>User: {user}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}