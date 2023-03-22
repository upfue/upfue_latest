import React, { Component } from 'react';
import NavBar from '../../CorporateBusiness/NavBar';
import Footer from '../PageFooterLayouts/Footer1';
import Section from './Section';
import WhatWeDo from './WhatWeDo'


class CorporateEDG extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <WhatWeDo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default CorporateEDG;