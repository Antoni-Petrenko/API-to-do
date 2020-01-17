import React,{useState,useEffect} from 'react';
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from "react-icons/md";
import {connect} from 'react-redux';
import {getTaskList} from '../../store/actions';
import {Btn} from './ControllButtons.module.scss';


const SortButtons = ({onSort,sortField}) => {

  let[state,setState]=useState({clickCount:1,direction:'asc'});

  useEffect(()=>{
    if(state.clickCount!==1){
      localStorage.setItem('sortDirection',state.direction);
      localStorage.setItem('sortField',sortField);
      onSort(localStorage.getItem('currentPagePosition'),sortField)
    } 
  })

  const sortListItem=()=>{
    if(state.clickCount%2===0){
        setState(prevState=>{
            return{
              clickCount:prevState.clickCount+1,
              direction:'desc'
            }
        })
    }else{
      setState(prevState=>{
          return{
            clickCount:prevState.clickCount+1,
            direction:'asc'
          }
      })
    }
  } 
  return (
    <div>
      <button className={Btn} onClick={sortListItem}>
        {sortField==='username'&&'имя'}
        {sortField==='email'&&'email'}
        {sortField==='status'&&'статус'}
        {  state.direction==='asc'?<MdKeyboardArrowDown/>:<MdKeyboardArrowUp/>
}
      </button>
    </div>
  )
}
function mapDispatchToProps(dispatch){
  return{
    onSort:(pageNumber,sortField,sortDirection)=>dispatch(getTaskList(pageNumber,sortField,sortDirection))
  }
}

export default connect(null,mapDispatchToProps)(SortButtons)
