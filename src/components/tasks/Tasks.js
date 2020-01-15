import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import TaskItem from './TaskItem';
import {getTaskList} from '../../store/actions';

const Tasks = ({taskList,onLoad}) => {
    
   useEffect(()=>{
       onLoad()
    },
   []); 
  return (
        <div> 
            <ul>{taskList.length?taskList.map(item=><TaskItem key={item.id} id={item.id} {...item}/>):<h2>Нет заданий на сегодня</h2>}</ul>
        </div>
  )
}


function mapStateToProps(state){
    return{
        taskList:state.taskList,
        total_task_count:state.total_task_count,
    }
}
function mapDispatchToProps(dispatch){
    return{
      onLoad: param=>dispatch(getTaskList(param)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tasks);
