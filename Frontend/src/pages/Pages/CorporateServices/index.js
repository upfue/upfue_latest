import React, { Component } from 'react';
import NavBar from '../../CorporateBusiness/NavBar';
import Section from './Section';
import Features from "./Features";
import WorkProcess from "./WorkProcess";
import WhatWeDo from './WhatWeDo';
import Footer from '../PageFooterLayouts/Footer1';
class CorporateServices extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <section className="section">
                    <Features />
                    <WorkProcess />
                    <WhatWeDo />
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default CorporateServices;