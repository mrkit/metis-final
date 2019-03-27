import React, { Component } from 'react';
import { client_id } from '../../.env';

class Login extends Component {
  state = {}
  
  componentDidMount(){
  }

  handleSubmit = e => {
    //unused, but works to log someone in to github.
    e.preventDefault();
    const username = e.target.username.value;
    
    window.location = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo gist&login=${username}`
  }

  render(){
    const { handleSubmit } = this;
    const { handleLogin, loggedIn } = this.props;
    console.log('Hello', loggedIn)
    return (
      <form className='Login-form' onSubmit={handleLogin}>
        { !loggedIn ? 
          <>
          <input className='Login-form-input' type='text' name='username' placeholder='Choose a username' autoFocus autoComplete='off'/>
          <button className='Login-form-button'>Pull Public Data</button> </>:
          <button className='Login-form-button'>Logout</button>
          }
      </form>
    )
  }
}

export default Login;