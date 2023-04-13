import React, { Component } from 'react';
import NavBar from '../../CorporateBusiness/NavBar';
import Section from './Section';
import Footer from '../PageFooterLayouts/Footer1';
import Blogdetails from './BlogDetails';

class CorporateBlogDetailFour extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Section />
                <Blogdetails />
                <Footer />
            </React.Fragment>
        );
    }
}
export default CorporateBlogDetailFour;