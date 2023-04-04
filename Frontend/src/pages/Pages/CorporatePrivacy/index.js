// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container, CardBody, Card } from 'reactstrap';
import Footer from '../PageFooterLayouts/Footer1';
import NavBar from '../../CorporateBusiness/NavBar';

//Import Icons
import FeatherIcon from 'feather-icons-react';

class Privacy extends Component {
  componentDidMount() {
    document.body.classList = '';
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
        document.querySelector('.settingbtn').classList.add('btn-soft-primary');
      }
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      date: new Date('2023-04-3'),
      dateFormat: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* breadcrumb */}
        <section className="bg-half-170 bg-light d-table w-100 d-print-none">
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading">
                  <h4 className="title"> Privacy Policy </h4>
                  <ul className="list-unstyled mt-4 mb-0">
                    <li className="list-inline-item h6 date text-muted">
                      {' '}
                      <span className="text-dark">Last Revised :</span>{' '}
                      {this.state.date.toLocaleDateString(
                        'en-us',
                        this.state.dateFormat,
                      )}
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>

            <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item">
                    <Link to="/">Upfue</Link>
                  </li>{' '}
                  <li className="breadcrumb-item active" aria-current="page">
                    Privacy Policy
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </section>

        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
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

        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg={9}>
                <Card className="card shadow rounded border-0">
                  <CardBody>
                    <h3 className="card-title text-center">Overview :</h3>
                    <h5>Introduction:</h5>
                    <p className="text-muted">
                      We are committed to protecting your privacy and ensuring
                      that your personal information is handled in a safe and
                      responsible manner. This privacy policy explains how we
                      collect, use, and protect your personal information when
                      you use our website.
                    </p>
                    <h5>Personal Information We Collect:</h5>
                    <p className="text-muted">
                      We collect personal information that you provide to us,
                      such as your name, email address, phone number, and
                      company name. We may also collect information about your
                      use of our website, such as your IP address, browser type,
                      and pages visited.
                    </p>
                    <h5>Use of Personal Information:</h5>
                    <p className="text-muted">
                      We use your personal information to provide you with the
                      services you have requested, to communicate with you about
                      our services, and to improve our website and services. We
                      may also use your personal information for marketing
                      purposes, such as sending you promotional materials or
                      newsletters.
                    </p>
                    <h5 className="card-title">
                      Disclosure of Personal Information:
                    </h5>
                    <p className="text-muted">
                      We do not sell, trade, or otherwise transfer your personal
                      information to third parties without your consent, except
                      as required by law or in connection with the sale or
                      transfer of our business.
                    </p>
                    <h5 className="card-title">
                      Security of Personal Information:
                    </h5>
                    <p className="text-muted">
                      We take appropriate measures to protect your personal
                      information from unauthorised access, disclosure, or
                      alteration. However, no transmission of data over the
                      internet is guaranteed to be completely secure, and we
                      cannot guarantee the security of your personal
                      information.
                    </p>
                    <h5 className="card-title">Cookies:</h5>
                    <p className="text-muted">
                      We use cookies on our website to improve your browsing
                      experience and to analyse how our website is used. You can
                      control the use of cookies through your web browser
                      settings.
                    </p>
                    <h5 className="card-title">
                      Access to Personal Information:
                    </h5>
                    <p className="text-muted">
                      You have the right to access, correct, or delete your
                      personal information at any time. To do so, please contact
                      us using the contact details provided on our website.
                    </p>
                    <h5 className="card-title">Changes to Privacy Policy:</h5>
                    <p className="text-muted">
                      We may update this privacy policy from time to time. Any
                      changes will be posted on our website, and your continued
                      use of our website will be deemed acceptance of the
                      updated privacy policy.
                    </p>
                    <h5 className="card-title">Governing Law:</h5>
                    <p className="text-muted">
                      This privacy policy is governed by and construed in
                      accordance with the laws of Singapore. Any dispute arising
                      out of or in connection with this privacy policy will be
                      subject to the exclusive jurisdiction of the courts of
                      Singapore.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Privacy;
