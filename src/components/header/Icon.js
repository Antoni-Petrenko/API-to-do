import React from 'react'
import {connect} from 'react-redux';

const Icon = ({isAdmin}) => {
  return (
    <div>
      {isAdmin?<h2>A</h2>:<h2>V</h2>}
    </div>
  )
}
function mapStateToProps(state){
    return{
        isAdmin:state.isAdmin
    }
}
export default connect(mapStateToProps,null)(Icon)
