import React from 'react'
import PropTypes from 'prop-types'

// refactoring into a functional component, because we dont have state. Using an arrow function below. With a function, you don't need a render. You now pass props into the arrow function, so you don't need this.
const UserItem = ({ user: { avatar_url, login, html_url } }) => {

  return (
      <div className='card text-center'>
        <img 
        src={avatar_url} 
        alt="pic" 
        className='round-img' 
        style={{ width: '60px'}} 
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} 
          className='btn btn-dark btn-sm my-1'>
          More</a>
        </div>
      </div>
    )  
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
