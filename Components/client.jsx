"use client";

import { useState, createContext, useContext } from "react";

export const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  return;
  <Context.Provider
    value={{
      user,
      setUser,
    }}
  >
    {children}
  </Context.Provider>;
};

export const LogoutBtn = () => {
  const logoutHandler = () => {
    alert("Logged Out");
  };

  const { user } = useContext(Context);
  return user.id ? (
    <button className="btn" onClick={logoutHandler}>
      Logout Button
    </button>
  ) : (
    <Link href={"/login"}>Login</Link>
  );
};
