import React from 'react';
import SortButton from './SortButton';
import {BtnSortContainer} from './ControllButtons.module.scss'
const SortButtons = () => {
  return (
    <div className={BtnSortContainer} >{
    ['статус','имя','email'].map((item,index)=>(<SortButton sortField={item} key={index}/>))}
    </div>
  )
}

export default SortButtons
