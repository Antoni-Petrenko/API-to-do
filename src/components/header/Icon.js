import React from 'react'
import { connect } from 'react-redux';
import { IconContainer, Logo } from './header.module.scss';
import { FaUser, FaUserTie } from 'react-icons/fa';

const Icon = ({ isAdmin }) => {
  return (
    <div className={IconContainer}>
      {isAdmin ?
        <h2 className={Logo}>
          <FaUserTie />
          <span>Админ</span>
        </h2> :

        <h2 className={Logo}>
          <FaUser />
          <span>Гость</span>
        </h2>}
    </div>
  )
}
function mapStateToProps(state) {
  return {
    isAdmin: state.isAdmin
  }
}
export default connect(mapStateToProps, null)(Icon)
