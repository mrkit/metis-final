import React, { Component } from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';
import { Bar, Pie } from 'react-chartjs-2';

class ChartSection1 extends Component {
    render(){
        const dataBar = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
            {
                label: '#1',
                data: [12, 39, 3, 50, 2, 32, 84],
                backgroundColor: 'rgba(245, 74, 85, 0.5)',
                borderWidth: 1
            }, {
                label: '#2',
                data: [56, 24, 5, 16, 45, 24, 8],
                backgroundColor: 'rgba(90, 173, 246, 0.5)',
                borderWidth: 1
            }, {
                label: '#3',
                data: [12, 25, 54, 3, 15, 44, 3],
                backgroundColor: 'rgba(245, 192, 50, 0.5)',
                borderWidth: 1
            }
            ]
        };

        const barChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
            xAxes: [{
                barPercentage: 1,
                gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
                }
            }],
            yAxes: [{
                gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                beginAtZero: true
                }
            }]
            }
        }

        return (
            <MDBRow className="mb-4">
                <MDBCol md="8"className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardBody>
                            <Bar data={dataBar} height={500} options={barChartOptions} />
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="mb-4">
                  
                    <MDBCard className="mb-4">
                        <MDBCardBody>
                            <MDBListGroup className="list-group-flush">
                                <MDBListGroupItem>
                                    Sales
                                    <MDBBadge color="success-color" pill className="float-right">
                                        22%
                                        <MDBIcon icon="arrow-up" className="ml-1"/>
                                    </MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    Traffic
                                    <MDBBadge color="danger-color" pill className="float-right">
                                        5%
                                        <MDBIcon icon="arrow-down" className="ml-1"/>
                                    </MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    Orders
                                    <MDBBadge color="primary-color" pill className="float-right">
                                        14
                                    </MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    Issues
                                    <MDBBadge color="primary-color" pill className="float-right">
                                        123
                                    </MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem>
                                    Messages
                                    <MDBBadge color="primary-color" pill className="float-right">
                                        8
                                    </MDBBadge>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        )
    }
}

export default ChartSection1;

