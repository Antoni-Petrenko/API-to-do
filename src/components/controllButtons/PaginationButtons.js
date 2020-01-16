import React from 'react';
import PaginationBtn from './PaginationButton';
import {connect} from 'react-redux';
import {getTaskList} from '../../store/actions';
import {BtnPaginationContainer} from './ControllButtons.module.scss'

const PaginationButtons = ({total_task_count,onLoad}) => {
  return (
    <section>
      <div className={BtnPaginationContainer}>{ 
          total_task_count.length?total_task_count.map((item,index)=>
              <PaginationBtn handleClick={onLoad} key={index} num={index+1}/>):null
      }</div>
    </section>
  )
}


function mapStateToProps(state){
    return{
        total_task_count:state.total_task_count
    }
}
function mapDispatchToProps(dispatch){
    return{
        onLoad: page=>dispatch(getTaskList(page)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PaginationButtons) 
