import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendNewTask } from '../../store/actions';
import { form, Btn, CreateTaskInputs } from './CreateTask.module.scss';


const CreateTask = ({ onSetNewTask }) => {
    const initState = {
        username: '',
        email: '',
        text: '',
    };
    

    const [newTask, setNewTask] = useState(initState);

    const handleInput = (e) => {
        const newState = { ...newTask };
        newState[e.target.name] = e.target.value;
        setNewTask(newState);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();
        for (const key in newTask) {
            form.append(key, newTask[key])
        }
        setNewTask(initState);
        onSetNewTask(form);
    }


    return (
        <form className={form} onSubmit={handleSubmit}>
            <input className={CreateTaskInputs} type="text" name='username' onChange={handleInput} value={newTask.username} placeholder='Имя пользователя' required />
            <input className={CreateTaskInputs} type="email" name='email' onChange={handleInput} value={newTask.email} placeholder='E-mail' required />
            <input className={CreateTaskInputs} type="text" name='text' onChange={handleInput} value={newTask.text} placeholder='Задача' required />
            <button className={Btn}>Создать задание</button>
        </form>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        onSetNewTask: form => dispatch(sendNewTask(form))

    }
}
export default connect(null, mapDispatchToProps)(CreateTask)
