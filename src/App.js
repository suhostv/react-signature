import React, { useState } from 'react';
import Header from './containers/header'
import Main from './containers/main';
import AppContext, {useAppContext} from "./context";
import mockedData from './mocked-info';
import './styles/app.css';

function App() {
  const data = useAppContext();

  return (
    <div className="app">
      <AppContext value={data}>
        <Header/>
        <Main/>
      </AppContext>
    </div>
  );
}

export default App;
