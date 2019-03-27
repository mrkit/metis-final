import React, { Component } from 'react'
import { MDBRow, MDBCol, MDBView, MDBCard, MDBCardBody } from 'mdbreact';

class DataPage extends Component {
  state = {
    users: []
  }
  
  componentDidMount(){
    fetch('/githubapi/test')
    .then(res => res.json())
    .then(users => this.setState({ users: users.data }))
    .catch(err => console.log('Fetch error', err.message));
  }
  
  render(){
    const { users } = this.state;
    
    return (
    <>
      <MDBRow>
      <MDBCol md="12">
        <MDBCard className="mt-5">
          <MDBView className="gradient-card-header blue darken-2">
            <h4 className="h4-responsive text-white">Commits</h4>
          </MDBView>
          <MDBCardBody>
            <div className='App'>
               <header className='App-header'>
               </header>

               <main className='App-users'>
                {
                  users.map(user => (
                    
                    <div className='App-users-items' key={user.id}>
                      <h4 className='App-users-items-display-name'>Display Name: {user.actor.display_login}</h4>
                      <div class="App-users-items-group">
                        <img className='App-users-items-group-img' src={user.actor.avatar_url} alt="avatar"/>
                        <h5 className='App-users-items-group-repo'>Repo Name: {user.repo.name}</h5>
                      </div>
                      <span className="App-users-items-commit">Commits: </span>
                        <ul className='App-users-items-ul'> 
                         {
                          user.payload.commits ? 
                          user.payload.commits.map(commit => <li className='App-users-items-ul-li' key={commit.id}>{commit.message}</li>) : 
                          <li className="App-users-items-ul-li">'No commits'</li>
                         }
                        </ul>
                    </div>
                    
                    
                  ))
                }
                </main>
              </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </>
  )
 }
}

export default DataPage;