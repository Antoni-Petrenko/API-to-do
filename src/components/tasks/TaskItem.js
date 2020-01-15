import React,{useState} from 'react';
import {connect} from 'react-redux';
import {setEdit} from '../../store/actions';
import Classes from './taskitem.module.css';
const TaskItem = ({id,username,email,text,status,isAdmin,onEdit}) => {
  status=status?true:false;
 const[task,setTask]=useState({text,status});

 const handleInput=(e)=>{
   const newTask={...task};

   if(e.target.name==='status')
      newTask[e.target.name]=!newTask[e.target.name];
   else   
      newTask[e.target.name]=e.target.value;
   setTask(newTask); 
   }

   const handleSubmit=(e)=>{
    e.preventDefault();
    
    const form=new FormData();
    form.append('text',task.text);
    form.append('status',task.status?'10':'0');
    form.append('token',localStorage.getItem('token'))
    onEdit(id,form)
  }
  return (
    <li>
        <div className={Classes.TaskItem}>
         
            <h2>
            <span>{username}</span>
            <span>{email}</span>
            </h2>  
            {isAdmin?
            <form onSubmit={handleSubmit}>
            <input type="text" name='text' value={task.text} onChange={handleInput}/>
            <input type='checkbox' name='status' checked={task.status&&true} onChange={handleInput}/>
            <button>Edit</button>
            </form>:
            <div>
            <span>{text}</span> 
            <span>{status?'Выполнено':'Невыполнено'}</span>
            </div>}
            
            
        </div>
    </li>
  )
}
function mapStateToProps(state){
  return{
      isAdmin:state.isAdmin,
      adminToken:state.adminToken
  }
}
function mapDispatchToProps(dispatch){
  return{
    onEdit: (taskId,text)=>dispatch(setEdit(taskId,text))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItem) 
