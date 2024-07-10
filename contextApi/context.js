"use client"
import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [viewDocument, setViewDocument] = useState(false);


  const value = { setViewDocument, viewDocument };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const Store = () => useContext(AppContext);
