import React,{useState} from 'react';
import {connect} from 'react-redux';
import {getTaskList,sendNewTask} from '../../store/actions';

const CreateTask = ({refreshTaskList,onSetNewTask}) => {
    const initState={
        username:'',
        email:'',
        text:'',
    };
const [newTask,setNewTask]=useState(initState);

const handleInput=(e)=>{
    const newState={...newTask};
    newState[e.target.id]=e.target.value;
    setNewTask(newState);
}
const handleSubmit=(e)=>{
    e.preventDefault();
    const form=new FormData();
    form.append('username',newTask.username);
    form.append('email',newTask.email);
    form.append('text',newTask.text);
    setNewTask(initState);
    onSetNewTask(form)
    // refreshTaskList()
}

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">
           User name: <input type="text" id='username' onChange={handleInput} value={newTask.username} required/>
        </label>
        <label htmlFor="email">
           User e-mail: <input type="email" id='email'
           onChange={handleInput}
           value={newTask.email} required/>
        </label>
        <label htmlFor="text">
           Task text: <input type="text" id='text'
           onChange={handleInput}
           value={newTask.text} required/>
        </label>
        <button>Enter Task</button>
    </form>
  )
}

function mapDispatchToProps(dispatch){
    return{
        refreshTaskList: ()=>dispatch(getTaskList()),
        onSetNewTask: form=>dispatch(sendNewTask(form))
    }
}
export default connect(null,mapDispatchToProps)(CreateTask)
