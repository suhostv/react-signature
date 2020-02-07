import React from 'react';
import Card from './card'
import {useAppContext} from "../context";

export default function Main() {
  const data = useAppContext();

  return (
    <div className="main">
      { data.map(item => (<Card cardData={item} key={item.id}/>))}
    </div>
  )
}