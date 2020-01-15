import React from 'react';
import SortButton from './SortButton';
import Classes from './sortbutton.module.css';
const SortButtons = () => {
  return (
    <div className={Classes.ButtonsContainer}>{
    ['id','username','email','status'].map((item,index)=>(
    <SortButton 
    sortField={item} 
    key={index}
    />)
    )}
    </div>
  )
}

export default SortButtons
