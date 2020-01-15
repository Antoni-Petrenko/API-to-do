import React from 'react';
import {connect} from 'react-redux';



const Alert = ({responseMessage,responseStatus}) => {
    
    const success={
        border:'1px solid green'
    }
    const error={
        border:'1px solid red'
    }

  return (
      <>
    {responseStatus.length?<div style={responseStatus==='ok'?success:error}>
    <h1>{responseMessage||'Успешно'}</h1>
    </div>:null}
</>
  )
}

function mapStateToProps(state){
    return{
        responseStatus: state.responseStatus,
        responseMessage: state.responseMessage
    }
}

export default connect(mapStateToProps)(Alert)
