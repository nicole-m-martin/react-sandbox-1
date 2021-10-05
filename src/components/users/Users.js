import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
  // hardcoded users array, will refactor to pulling from the github api later. 
  state = {
    users: [
     {
      id: '1',
      login: 'mojombo',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo'
     },
     {
      id: '2',
      login: 'defunkt',
      avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
      html_url: 'https://github.com/defunkt'
     },
     {
      id: '3',
      login: 'pjhyett',
      avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
      html_url: 'https://github.com/pjhyett'
     },
    ]
  }
  render() {
    return (
      // using a variable userStyle to style the component
      <div style={userStyle}>
        {/* .map() high order array method, using to loop through the user data and then render a user item component */}
        {this.state.users.map(user => (
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
