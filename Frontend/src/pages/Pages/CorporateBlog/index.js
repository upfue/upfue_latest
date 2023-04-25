import React, { Component } from 'react';
import NavBar from '../../CorporateBusiness/NavBar';
import Section from './Section';
import Blogs from './Blog';
import Footer from '../PageFooterLayouts/Footer1';

class CorporateBlog extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Section />
        <Blogs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default CorporateBlog;
