"use client";

import { createContext } from "react";
export const MyContext = createContext();

const Context = ({ children }) => {
  const user = "Arnab Bhoumik";
  console.log(user)
  return <MyContext.Provider value={user}>{children}</MyContext.Provider>; 
};

export default Context;
