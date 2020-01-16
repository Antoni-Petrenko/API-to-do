import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Btn,FormGroup,Form} from './header.module.scss';
import { getLogin, Logout } from '../../store/actions';


const LoginBar = ({onLogin,isAdmin,onLogout}) => {

  const initState={username:'',password:''}

  const [userLogin,setUserLogin]=useState(initState);

 const handleInputs=(e)=>{
    const newState={...userLogin};
    newState[e.target.id]=e.target.value
    setUserLogin(newState);
}
 const handleSubmit=(e)=>{
    e.preventDefault();
    const form=new FormData();
    form.append('username',userLogin.username);
    form.append('password',userLogin.password);
    setUserLogin(initState)
    onLogin(form)
  }
  

  return (
    <>
    {isAdmin?
    <button className={Btn} onClick={onLogout}>Выход</button>:
      <form className={Form} onSubmit={handleSubmit}>
        <div className={FormGroup}>
          <input type="text" id='username' value={userLogin.username} onChange={handleInputs} 
        placeholder="Логин" required/>
        </div>
        <div className={FormGroup}>
          <input type="password" id='password' value={userLogin.password} onChange={handleInputs} placeholder="Пароль" required/>
        </div>
          
        <button className={Btn}>Войти</button>
      </form>
      }
    </>
    
  )
}
function mapStateToProps(state){
  return{
    isAdmin:state.isAdmin
  }
}
function mapDispatchToProps(dispatch){
    return{
      onLogin: form=>dispatch(getLogin(form)),
      onLogout: ()=>dispatch(Logout())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginBar)
