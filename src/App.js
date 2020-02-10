import React, { useState } from 'react';
import Header from './containers/header';
import Main from './containers/main';
import AppContext from "./context";
import mockedData from './mocked-info';
import './styles/app.css';

function App() {
  const [appData, changeAppData] = useState(mockedData);

  const setAppData = (id, prop, value) => {
    const index = appData.findIndex(item => item.id === id);
    appData[index][prop] = value;
    changeAppData([...appData]);
  }

  const deleteChecked = () => {
    const filtered = appData.filter((item) => item.isChecked ? null : item);
    changeAppData(filtered);
  }

  const deleteItemById = (id) => {
    const filtered = appData.filter((item) => item.id !== id);
    changeAppData(filtered);
  }

  const toggleChecksOfAllCards = (value) => {
    const deleted = appData.map(item => ({...item, isChecked: value}));
    changeAppData(deleted);
  }

  const checkedItemsCounter = appData.reduce((acc, curr) => acc + curr.isChecked, 0);
  const isEveryItemChecked = checkedItemsCounter === appData.length;

  return (
    <div className="app">
      <AppContext 
        appData = {appData} 
        setAppData = {setAppData} 
        atLeastOneChecked = {!!checkedItemsCounter}
        deleteItemById = {deleteItemById}
      >
        <Header 
          checkedItemsCounter = {checkedItemsCounter}
          isEveryItemChecked = {isEveryItemChecked}
          toggleChecksOfAllCards = {toggleChecksOfAllCards}
          deleteChecked = {deleteChecked}
        />
        <Main/>
      </AppContext>
    </div>
  );
}

export default App;
