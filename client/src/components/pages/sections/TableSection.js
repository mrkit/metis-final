import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';
import repos from '../../../assets/metis-data/repos_try_2';
import EmptyRecommendation from './EmptyRecommendationSection';

import deeplearningmodels from '../../../assets/metis-data/repo_2_final 2';
import deeplearningwithpythonnotebooks from '../../../assets/metis-data/repo_3_final 2';
import kerasResources from '../../../assets/metis-data/repo_6_final 2';
import tensorFLow from '../../../assets/metis-data/repo_8_final 2';


class TableSection extends Component {
  state = {
    recommendations: []
  }

  handleClick = e => {
    const name = e.target.innerText;

    switch(name){
      case 'deep-learning-models':
        return this.setState({ recommendations: deeplearningmodels });
      case 'deep-learning-with-python-notebooks':
        return this.setState({ recommendations: deeplearningwithpythonnotebooks });
      case 'keras-resources':
        return this.setState({ recommendations: kerasResources });
      case 'tensorflow':
        return this.setState({ recommendations: tensorFLow })
      default:
        return [];
    }
  } 
  
  render(){ 
    const { handleClick } = this;
    const { recommendations } = this.state;
    
    return (
      <MDBRow className="mb-4 repo-comparisons">
            <MDBCol md="6">
                <MDBCard>
                    <MDBCardBody>
                      <MDBTable hover>
                        <MDBTableHead color="blue-grey lighten-4">
                          <tr>
                            <th className="table-repo-name">Repo</th>
                            <th className="table-description">Description</th>
                            <th className="table-link">Link</th>
                            <th className="table-topic">Topic</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          {
                            repos.map(repo => {
                              return <tr key={repo[0]} onClick={handleClick}>
                                <td>{repo[1]}</td>
                                <td>{repo[2]}</td>
                                <td><a href={repo[3]}>Link</a></td>
                                <td>{repo[4]}</td>
                              </tr>
                            })
                          }

                        </MDBTableBody>
                      </MDBTable>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol md="6">
                <MDBCard className='repo-comparisons-recommendation'>
                    <MDBCardBody className='repo-comparisons-recommendation-item'>
                      <MDBTable hover>
                        <MDBTableHead color="blue lighten-4">
                          <tr>
                            <th className="table-repo-name-2">Repo</th>
                            <th className="table-description-2">Description</th>
                            <th className="table-topic-2">Topic</th>
                            <th className="table-language-2">Language</th>
                            <th className="table-repo-owner-2">Repo Owner</th>
                            <th>Owner Email</th>
                          </tr>
                        </MDBTableHead>
                         {
                            recommendations.length === 0 ? 
                            <EmptyRecommendation/> :
                            <MDBTableBody>

                              {recommendations.map(repo => {
                            console.log('Repo', repo)
                            return (
                                <tr key={repo[2]}>
                                <td><a href={repo[3]}>{repo[6]}</a></td>
                                  <td>{repo[0]}</td>
                                  <td>{repo[1]}</td>
                                  <td>{repo[4]}</td>
                                  <td className="table-repo-owner"><a href={repo[5].html_url}>{repo[5].login}</a></td>
                                  <td><a href={`mailto:${repo[5].email}`}>{repo[5].email}</a></td>
                                </tr>
                              )})}
                            </MDBTableBody>

                          }
                      </MDBTable>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
  }
}

export default TableSection;

