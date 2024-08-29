// src/AppContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <AppContext.Provider value={{ isDisabled, setIsDisabled }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
