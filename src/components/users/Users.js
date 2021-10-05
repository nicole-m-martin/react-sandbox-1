import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
 
  
  render() {
    return (
      // using a variable userStyle to style the component
      <div style={userStyle}>
        {/* .map() high order array method, using to loop through the user data and then render a user item component */}
        {this.props.users.map(user => (
          // props are being passed in with {} from Users.js file
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

// can not use dashes - so must use Camel Case pulled into line 31 above
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem' 
}

export default Users
