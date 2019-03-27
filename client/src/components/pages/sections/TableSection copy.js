import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';
import repos from '../../../assets/metis-data/repos_try_2';
import EmptyRecommendation from './EmptyRecommendationSection';

import deeplearningmodels from '../../../assets/metis-data/repo_2_final';
import deeplearningwithpythonnotebooks from '../../../assets/metis-data/repo_3_final';
import kerasResources from '../../../assets/metis-data/repo_6_final';
import tensorFLow from '../../../assets/metis-data/repo_8_final';

console.log('Start', deeplearningmodels, 'HIHI', tensorFLow);


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
                            <th>Link</th>
                            <th>Topic</th>
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
            <MDBCol md="6" className="mb-4">
                <MDBCard className='repo-comparisons-recommendation'>
                    <MDBCardBody className='repo-comparisons-recommendation-item'>
                      <MDBTable hover>
                        <MDBTableHead color="blue lighten-4">
                          <tr>
                            <th className="table-repo-name">Repo</th>
                            <th className="table-description">Description</th>
                            <th>Link</th>
                            <th>Topic</th>
                          </tr>
                        </MDBTableHead>
                         {
                            recommendations.length === 0 ? 
                            <EmptyRecommendation/> :
                            <MDBTableBody>

                              {recommendations.map(repo => (
                                <tr key={repo[0]}>
                                  <td>{repo[57].login}</td>
                                  <td>{repo[3]}</td>
                                  <td><a href={repo[3]}>Link</a></td>
                                  <td>{repo[0]}</td>
                                </tr>
                              ))}
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

