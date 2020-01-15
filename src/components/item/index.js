import React from 'react'

import './style.scss'
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked'
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked'

function Item({ todo, toggleTodo, index }) {
  const { text, complete } = todo; 

  return (
    <div className="item" onClick={() => toggleTodo(index)}>
      <div className="item__indicator">
        { complete ? <RadioButtonChecked /> : <RadioButtonUnchecked /> }
      </div>
      <div className={`item__text ${complete ? 'item__text_complete' : ''}`}>{ text }</div>
    </div>
  );
}

export default Item;