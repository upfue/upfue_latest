// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../PageFooterLayouts/Footer1';
import NavBar from '../../CorporateBusiness/NavBar';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Collapse,
} from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

class Terms extends Component {
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

  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* breadcrumb */}
        <section className="bg-half-170 bg-light d-table w-100">
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div className="pages-heading">
                  <h4 className="title mb-0"> Terms of Services </h4>
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
                    Terms & Conditon
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
                <Card className="shadow border-0 rounded">
                  <CardBody>
                    <h3 className="card-title text-center">Overview :</h3>
                    <h5 className="card-title">Introduction :</h5>
                    <p className="text-muted">
                      These terms and conditions govern the use of our website
                      and the services we provide. By accessing or using our
                      website, you agree to these terms and conditions in full.
                      If you do not accept these terms and conditions or any
                      part of them, you should not use our website.
                    </p>
                    <h5 className="card-title">Use of Website :</h5>
                    <p className="text-muted">
                      You must ensure that all information you provide to us
                      through our website is accurate, complete, and not
                      misleading. You are responsible for keeping your login
                      details confidential and secure.
                    </p>
                    <h5 className="card-title">Intellectual Property :</h5>
                    <p className="text-muted">
                      All intellectual property rights in our website and the
                      material published on it are owned by us or our licensors.
                      You may not copy, reproduce, distribute, or otherwise use
                      any material from our website without our prior written
                      consent.
                    </p>
                    <h5 className="card-title">Limitation of Liability :</h5>
                    <p className="text-muted">
                      We will not be liable for any loss or damage arising out
                      of or in connection with the use of our website or any
                      information or services provided through it. We will not
                      be liable for any indirect or consequential loss or damage
                      whatsoever.
                    </p>
                    <h5 className="card-title">
                      Links to Third-Party Websites :
                    </h5>
                    <p className="text-muted">
                      Our website may contain links to third-party websites.
                      These links are provided for your convenience only, and we
                      do not endorse or accept any responsibility for the
                      content or use of these websites.
                    </p>
                    <h5 className="card-title">Termination :</h5>
                    <p className="text-muted">
                      We reserve the right to terminate your access to our
                      website at any time and for any reason, without notice.
                    </p>
                    <h5 className="card-title">
                      Changes to Terms and Conditions :
                    </h5>
                    <p className="text-muted">
                      We may update these terms and conditions from time to
                      time. Any changes will be posted on our website, and your
                      continued use of our website will be deemed acceptance of
                      the updated terms and conditions.
                    </p>
                    <h5 className="card-title">Governing Law :</h5>
                    <p className="text-muted">
                      These terms and conditions are governed by and construed
                      in accordance with the laws of Singapore. Any dispute
                      arising out of or in connection with these terms and
                      conditions will be subject to the exclusive jurisdiction
                      of the courts of Singapore.
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
export default Terms;
