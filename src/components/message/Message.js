import React from 'react';
import { connect } from 'react-redux';
import { MassageContainer, rSuccess, rError } from './Massage.module.scss';


const Message = ({ responseMessage, responseStatus }) => {

  return (
    <>
      {responseStatus.length ?
        <div className={MassageContainer}>
          <h2 className={responseStatus === 'ok' ? rSuccess : rError}>{responseMessage || 'Успешно'}</h2>
        </div> :
        <div className={MassageContainer}>
        </div>}
    </>
  )
}

function mapStateToProps(state) {
  return {
    responseStatus: state.responseStatus,
    responseMessage: state.responseMessage
  }
}

export default connect(mapStateToProps)(Message)
