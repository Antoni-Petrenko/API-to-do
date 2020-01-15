import React, {useState} from 'react';
import {connect} from 'react-redux';
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
    {isAdmin?<button onClick={onLogout}>Exit</button>:<form onSubmit={handleSubmit}>
        <label htmlFor="login">Login: <input type="text" id='username' value={userLogin.username} onChange={handleInputs} required/></label>
        <label htmlFor="password">Password: <input type="password" id='password' value={userLogin.password} onChange={handleInputs} required/></label>
        <button>Login</button>
    </form>}
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
