import { createContext } from "react";

export const Context = createContext();

export const GlobalProvider = ({ children }) => {
  const api = `http://ecommerce.reworkstaging.name.ng/v2`;

  const userLogin = () => {};

  const value = {
    userLogin,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
