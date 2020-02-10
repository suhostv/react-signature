import React, { createContext, useContext } from 'react';
import mockedData from './mocked-info'

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export default function AppContexts({ children, ...props }) {
  return (
    <AppContext.Provider value={{...props}}>
      { children }
    </AppContext.Provider>
  )
};

export { useAppContext };