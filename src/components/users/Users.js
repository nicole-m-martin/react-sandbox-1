import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
    if(loading) {
      return <Spinner /> 
    } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
         <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

// can not use dashes - so must use Camel Case pulled into line 31 above
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem' 
}


export default Users
