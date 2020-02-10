import React from 'react';
import Icon from '../components/icon';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../styles/header.css'

export default function Header({ 
  checkedItemsCounter, 
  isEveryItemChecked,
  toggleChecksOfAllCards, 
  deleteChecked 
}) {
  const onDeleteChecked = () => {
    deleteChecked();
  }
  
  const onToggleChecksOfAllCards = (e) => {
    toggleChecksOfAllCards(e.target.checked);
  }

  const onDeleteAllChecks = () => {
    toggleChecksOfAllCards(false);
  }

  return (
    <div className="header">
    { !!checkedItemsCounter ?
      <>
        <input type='checkbox' id='checkbox' checked={isEveryItemChecked} onChange={onToggleChecksOfAllCards}/>
        <label htmlFor='checkbox'>Selected ({checkedItemsCounter})</label>
        <Icon icon={faTimes} onClick={onDeleteAllChecks}/>
        <button onClick={onDeleteChecked}>
          Delete ({checkedItemsCounter})
        </button>
      </>
      : 
      <>
        <h4>Signature List</h4>
        <button>
          <a href="https://google.com">
            Create a Signature
          </a>
        </button>
      </>
    }
    </div>
  )
}