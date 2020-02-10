import React from 'react';
import Card from './card'
import {useAppContext} from "../context";

export default function Main() {
  const { appData } = useAppContext();
  console.warn({appData})

  return (
    <div className="main">
      { appData.map(item => (<Card cardData={item} key={item.id}/>))}
    </div>
  )
}