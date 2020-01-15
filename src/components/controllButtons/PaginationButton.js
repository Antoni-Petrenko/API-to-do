import React from 'react';

const PaginationButton = ({num,handleClick}) => {
  return (
  <button 
  style={localStorage.getItem('currentPagePosition')===`${num}`?{color:'red'}:null} 
  onClick={()=>{
    localStorage.setItem('currentPagePosition',`${num}`)
    handleClick(num)
  }
  }>{num}
  </button>
  )
}

export default PaginationButton
