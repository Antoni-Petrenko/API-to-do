import React from 'react';
import SortButton from './SortButton';
import { BtnSortContainer } from './ControllButtons.module.scss'
const SortButtons = () => {
  return (
    <section className={BtnSortContainer} >{
      ['status', 'username', 'email'].map((item, index) => (<SortButton sortField={item} key={index} />))}
    </section>
  )
}

export default SortButtons
