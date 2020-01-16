import React,{useState} from 'react';
import {connect} from 'react-redux';
import {setEdit} from '../../store/actions';
import {MdRadioButtonUnchecked,MdRadioButtonChecked} from "react-icons/md";
import {Task, TaskLabel,TaskForm,TaskTextarea,Btn} from './Task.module.scss';


const TaskItem = ({id,username,email,text,status,isAdmin,onEdit}) => {

  status=status?true:false; // transform status numbers 10&0 to boolean

  const editedTaskKeyword='AdminEdit'; //key word which we add to task before send to server, for change detected

  let isTaskTextEdit; 

  if(text.endsWith(editedTaskKeyword)){ //keyword detection in task text
    isTaskTextEdit=true;
    text=text.slice(0,text.length-editedTaskKeyword.length);  // cat keywor from taks text
  }
  
  const[task,setTask]=useState({text,status});
 
  const handleInput=(e)=>{
      const newTask={...task};
  if(e.target.name==='status'){
      newTask[e.target.name]=!newTask[e.target.name];
   }
  else{
        newTask[e.target.name]=e.target.value;
   }
  setTask(newTask); 
   }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const form=new FormData();
    if(text!==task.text){ //If text from input !== text from state
      form.append('text',task.text+editedTaskKeyword); //Add keyword to task text
    }
    form.append('status',task.status?'10':'0'); 
    form.append('token',localStorage.getItem('token'));
    onEdit(id,form);
  }
  return (
    <li className={Task}>
      <label className={TaskLabel} htmlFor={id}>
          {task.status?<MdRadioButtonChecked/>:<MdRadioButtonUnchecked/>}
      </label>
        <form className={TaskForm} onSubmit={isAdmin?handleSubmit:()=>console.log('авторизуйтесь')}>
          <textarea className={TaskTextarea} name='text' value={task.text} onChange={isAdmin?handleInput:()=>console.log('авторизуйтесь')}/>
          <input style={{display:'none'}} type='checkbox' name='status' id={id} checked={isAdmin?task.status:()=>console.log('авторизуйтесь')} onChange={handleInput}/>
          <span>Имя: {username}</span>
          <span>E-mail: {email}</span>
          <span>{isTaskTextEdit&&'Редактировано Администратором'}</span>
        </form>
      <button className={Btn} onClick={isAdmin?handleSubmit:()=>console.log('авторизуйтесь')}>Редактировать</button>
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
