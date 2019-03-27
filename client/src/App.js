import React, { Component } from 'react';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';
import SideNavigation from './components/sideNavigation';
import './index.css';

class App extends Component {
  state = {
    loggedIn: false
  }
  
  handleLogin = e => {
    e.preventDefault();
    this.setState({ loggedIn : !this.state.loggedIn });
  }
  
  render() {
    const { loggedIn } = this.state;
    const { handleLogin } = this;
    return (
        <div className="flexible-content">
          <TopNavigation loggedIn={loggedIn} handleLogin={handleLogin}/>
          <SideNavigation />
          { loggedIn && 
            <main id="content" className="p-5">
              <Routes />
            </main>
          }
        </div>
    );
  }
}

export default App;
