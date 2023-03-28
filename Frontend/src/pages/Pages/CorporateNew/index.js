import React, { Component } from 'react';
import NavBar from '../../CorporateBusiness/NavBar';
import Section from './Section';
import Footer from '../PageFooterLayouts/Footer1';
import New from './New';

class CorporateNew extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <New />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default CorporateNew;