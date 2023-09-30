// MyContext.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function MyProvider({ children }) {
  const contextValue = {
    basename: '/Login', // This is just an example value
    // other context properties and functions
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
}

export function useMyContext() {
  return useContext(MyContext);
}
