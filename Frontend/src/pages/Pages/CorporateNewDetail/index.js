import React, { Component } from 'react';
import NavBar from '../../CorporateBusiness/NavBar';
import BlogDetails from './NewDetails';
import Section from './Section';
import Footer from '../PageFooterLayouts/Footer1';

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