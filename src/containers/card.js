import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import '../styles/card.css'

const fieldOptions = {
  true: 'YES',
  false: 'NO'
};

export default function Card({ cardData }) {
  console.warn(cardData);

  return (
    <div className="card">
      <div className='card__hover-container'>
        <div className='card__hover-container--header'>
          <input type='checkbox'/>
        </div>
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
          <button>
            <a href="https://google.com">
              Use
            </a>
          </button>
          <div className='icon-container'>
            <FontAwesomeIcon icon={faPen}/>
            <FontAwesomeIcon icon={faEye}/>
            <FontAwesomeIcon icon={faTrashAlt}/>
          </div>
        </div>
      </div>
    </div>
  )
}