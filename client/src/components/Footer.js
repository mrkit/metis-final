import React from 'react';
import { MDBFooter, } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter color="blue" className="text-center font-small darken-2">
            {/* <div className="pt-4">
              <hr className="my4"/>
            </div> */}
            
            <p className="footer-copyright mb-0 py-3 text-center">
                {new Date().getFullYear()}
            </p>
        </MDBFooter>
    );
}

export default Footer;