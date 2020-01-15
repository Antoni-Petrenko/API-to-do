import React from 'react';
import PaginationBtn from './PaginationButton';
import {connect} from 'react-redux';
import {getTaskList} from '../../store/actions';

const PaginationButtons = ({total_task_count,onLoad}) => {
  return (
    <div>
      <div>{ 
        total_task_count.length?total_task_count.map((item,index)=>
              <PaginationBtn handleClick={onLoad} key={index} num={index+1}/>):null
      }</div>
    </div>
  )
}

function mapStateToProps(state){
    return{
        total_task_count:state.total_task_count
    }
}
function mapDispatchToProps(dispatch){
    return{
        onLoad: param=>dispatch(getTaskList(param)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PaginationButtons) 
