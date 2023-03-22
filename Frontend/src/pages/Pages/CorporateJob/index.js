import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Shape from './Shape';

//Import Components
import Section from './Section';
import NavBar from '../../CorporateBusiness/NavBar';
import Footer from '../../Pages/PageFooterLayouts/Footer1';
import FeaturedJobs from "./FeaturedJobs";
import ExpertEmployees from './ExpertEmployees';
import Popup from '../../../components/Layout/popup';

class CorporateJob extends Component {
  componentDidMount() {
    document.body.classList = '';
    document.querySelector('.shoppingbtn').classList.add('btn-primary');
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    const navBar = document.getElementById('topnav');
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (navBar != null) {
      if (top > 80) {
        navBar.classList.add('nav-sticky');
      } else {
        navBar.classList.remove('nav-sticky');
        document.querySelector('.shoppingbtn').classList.add('btn-primary');
        document.querySelector('.shoppingbtn').classList.remove('btn-light');
        document.querySelector('.settingbtn').classList.add('btn-soft-primary');
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* section */}
        <Section />
        <Shape />

        <section className="section">
          <FeaturedJobs />
          <ExpertEmployees/>
        </section>

        <div className="position-relative">
          <div className="shape overflow-hidden text-light">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <Footer />
        <Popup />
      </React.Fragment>
    );
  }
}

export default CorporateJob;
