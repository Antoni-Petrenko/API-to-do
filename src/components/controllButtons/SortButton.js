import React,{useState} from 'react';
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from "react-icons/md";
import {connect} from 'react-redux';
import {getTaskList} from '../../store/actions';


const SortButtons = ({onSort,sortField}) => {
  const[clickCount,setClickCount]=useState(0);
 
  
  let direction=(clickCount%2===0&&clickCount!==0?'desc':'asc');
  

  const sortListItem=()=>{
    setClickCount(clickCount+1);   
    localStorage.setItem('sortDirection',direction);
    localStorage.setItem('sortField',sortField)
    onSort(localStorage.getItem('currentPagePosition'),sortField)
  } 

  return (
    <div>
      <button onClick={sortListItem}>
        {sortField}
        {}
        {direction==='desc'?<MdKeyboardArrowUp/>:<MdKeyboardArrowDown/>}
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
