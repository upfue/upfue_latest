import React, { Component } from 'react';
import NavBar from '../../CorporateBusiness/NavBar';
import Section from './Section';
import Footer from '../PageFooterLayouts/Footer1';
import BlogDetails from './BlogDetails';

class CorporateBlogDetail extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Section />
        <BlogDetails />
        <Footer />
      </React.Fragment>
    );
  }
}

export default CorporateBlogDetail;
