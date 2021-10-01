import React, { Component } from 'react'

class UserItem extends Component {
  // this is a constructor must use super() to work
  // constructor() {
  //   super();
    // hard coded dummy data for now-will use http in refactor
    state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo'
    };
  
  render() {
    const { avatar_url, login, html_url } = this.state
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
}

export default UserItem
