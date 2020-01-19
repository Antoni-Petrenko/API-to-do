import React from 'react';
import { Btn } from './ControllButtons.module.scss'
const PaginationButton = ({ num, handleClick }) => {
  return (
    <button
      className={Btn}
      style={localStorage.getItem('currentPagePosition') === `${num}` ? { color: 'red' } : null}
      onClick={() => {
        localStorage.setItem('currentPagePosition', `${num}`)
        handleClick(num)
      }
      }>{num}
    </button>
  )
}

export default PaginationButton
