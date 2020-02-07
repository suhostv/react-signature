import React, { createContext, useContext } from 'react';
import mockedData from './mocked-info'

const AppContext = createContext(mockedData);
const useAppContext = () => useContext(AppContext);

export default function AppContexts({ children, value }) {
  return (
    <AppContext.Provider value={value}>
      { children }
    </AppContext.Provider>
  )
};

export { useAppContext };