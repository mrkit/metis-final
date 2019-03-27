import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon, NavbarBrand, MDBCardImage, MDBAnimation } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <MDBListGroup className="list-group-flush">
                <NavbarBrand>
                    <MDBAnimation>
                        <div align='middle'>
                        <MDBCardImage src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' className="mr-2" height="100" width="100" align='middle'/>
                        </div>
                    </MDBAnimation>
                </NavbarBrand>

                <NavLink exact={true} to="/" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Profile
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/dashboard" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
  
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;