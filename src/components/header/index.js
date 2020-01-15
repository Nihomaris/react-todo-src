import React from 'react';

import './style.scss'

import Delete from '@material-ui/icons/Delete'

function Header({ removeTodo }) {
  return (
    <div className="header">
      <div className="header__title">TODO list</div>
      <div className="header__remove"><Delete onClick={() => removeTodo()} /></div>
    </div>
  );
}

export default Header;
