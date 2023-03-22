import React, { Component } from 'react';
import NavBar from '../../CorporateBusiness/NavBar';
import Footer from '../PageFooterLayouts/Footer1';
import Section from './Section';
import TeamPage from './TeamPage';
import { Container, Row, Col } from 'reactstrap';
import landing2 from '../../../assets/images/landing/2.jpg';
import { Link } from 'react-router-dom';

class CorporateTeam extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Section />
        <TeamPage />
        <section className="section">
          <Container>
            <Row className="align-items-center">
              <Col lg={5} md={6}>
                <img
                  src={landing2}
                  className="img-fluid rounded-md shadow-lg"
                  alt=""
                />
              </Col>

              <Col lg={7} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="section-title text-md-start text-center ms-lg-4">
                  <h4 className="title mb-4">
                    Collaborate with our <br /> team anytime and anywhare.
                  </h4>
                  <p className="text-muted mb-0 para-desc">
                    Start working with{' '}
                    <span className="text-primary fw-bold">Upfue</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect.
                  </p>

                  <div className="d-flex align-items-center text-start mt-4 pt-2">
                    <div className="text-primary h4 mb-0 me-3 p-3 rounded-md shadow">
                      <i className="uil uil-capture"></i>
                    </div>
                    <div className="flex-1">
                      <Link to="#" className="text-dark h6">
                        Find Better Leads
                      </Link>
                    </div>
                  </div>

                  <div className="d-flex align-items-center text-start mt-4">
                    <div className="text-primary h4 mb-0 me-3 p-3 rounded-md shadow">
                      <i className="uil uil-file"></i>
                    </div>
                    <div className="flex-1">
                      <Link to="#" className="text-dark h6">
                        Set Instant Metting
                      </Link>
                    </div>
                  </div>

                  <div className="d-flex align-items-center text-start mt-4">
                    <div className="text-primary h4 mb-0 me-3 p-3 rounded-md shadow">
                      <i className="uil uil-credit-card-search"></i>
                    </div>
                    <div className="flex-1">
                      <Link to="#" className="text-dark h6">
                        Get Paid Seemlessly
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default CorporateTeam;
