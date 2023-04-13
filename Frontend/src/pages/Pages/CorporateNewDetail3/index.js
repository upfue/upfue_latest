import React, { Component } from 'react';
import NavBar from '../../CorporateBusiness/NavBar';
import Section from './Section';
import Footer from '../PageFooterLayouts/Footer1';
import Newdetails from './NewDetails';

class CorporateNewDetailThree extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <Newdetails />
                <Footer />
            </React.Fragment>
        );
    }
}

export default CorporateNewDetailThree;