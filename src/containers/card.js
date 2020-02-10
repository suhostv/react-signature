import React from 'react';
import {useAppContext} from "../context";
import Icon from '../components/icon';
import { faPen, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/card.css';
import Button from '../components/button';

const fieldOptions = {
  true: 'YES',
  false: 'NO'
};

export default function Card({ cardData }) {
  const { setAppData, atLeastOneChecked, deleteItemById } = useAppContext();
  
  const onCheckboxChange = (e) => {
    setAppData(cardData.id, 'isChecked', e.target.checked);
  }
  
  const onDeleteCard = () => {
    deleteItemById(cardData.id);
  }

  return (
    <div className="card" style={{
        backgroundImage: `url(${cardData.pictureHref})`,
      }}>
      <div 
        className='card__hover-container' 
        style={atLeastOneChecked ? {opacity: 1} : {}}
      >
        <div className='card__hover-container--header'>
          <input type='checkbox' checked={cardData.isChecked} onChange={ onCheckboxChange}/>
        </div>
        { !atLeastOneChecked &&
          <>
            <div className='card__hover-container--main'>
              <span>
                Sent by admin: {fieldOptions[cardData.sentByAdmin]}
              </span>
              <span>
                Installed by user: {fieldOptions[cardData.installedByUser]}
              </span>
              <span>
                Last edited: {cardData.lastEdited.toLocaleString()}
              </span>
            </div>
            <div className='card__hover-container--footer'>
              <Button link="https://google.com" text='Use'/>
              <div className='icon-container'>
                <Icon icon={faPen}/>
                <Icon icon={faEye}/>
                <Icon icon={faTrashAlt} onClick={onDeleteCard}/>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}