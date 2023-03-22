import React, { Component } from 'react';
import NavBar from '../../CorporateBusiness/NavBar';
import Footer from '../PageFooterLayouts/Footer1';
import AboutUs from './AboutUs';
import Section from './Section';
import PageJobCompany from './PageJobCompany';
import WorkProcess from './WorkProcess';

class CorporateAbout extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Section />
        <AboutUs />
        <PageJobCompany />
        <WorkProcess/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default CorporateAbout;
