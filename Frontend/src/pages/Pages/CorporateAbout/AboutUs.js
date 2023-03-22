import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

//import images
import onlineImg1 from '../../../assets/images/course/online/ab01.jpg';
import onlineImg2 from '../../../assets/images/course/online/ab02.jpg';
import onlineImg3 from '../../../assets/images/course/online/ab03.jpg';

export default class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="section">
          <Row className="align-items-center">
            <Col lg={5} md={6}>
              <Row className="align-items-center">
                <Col lg={6} xs={6} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-md">
                    <CardBody className="p-0">
                      <img src={onlineImg1} className="img-fluid" alt="" />
                      <div className="overlay-work bg-dark"></div>
                      <div className="content">
                        <Link
                          to="#"
                          className="title text-white d-block fw-bold"
                        >
                          Web Development
                        </Link>
                        <small className="text-light">IT & Software</small>
                      </div>
                    </CardBody>
                  </Card>
                </Col>

                <Col lg={6} xs={6}>
                  <Row>
                    <Col lg={12} md={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                      <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-md">
                        <CardBody className="p-0">
                          <img src={onlineImg2} className="img-fluid" alt="" />
                          <div className="overlay-work bg-dark"></div>
                          <div className="content">
                            <Link
                              to="#"
                              className="title text-white d-block fw-bold"
                            >
                              Michanical Engineer
                            </Link>
                            <small className="text-light">Engineering</small>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg={12} md={12} className="mt-4 pt-2">
                      <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-md">
                        <CardBody className="p-0">
                          <img src={onlineImg3} className="img-fluid" alt="" />
                          <div className="overlay-work bg-dark"></div>
                          <div className="content">
                            <Link
                              to="#"
                              className="title text-white d-block fw-bold"
                            >
                              Chartered Accountant
                            </Link>
                            <small className="text-light">C.A.</small>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col lg={7} md={6} className="mt-4 mt-lg-0 pt- pt-lg-0">
              <div className="ms-lg-4">
                <div className="section-title">
                  <span className="badge bg-soft-primary rounded-pill fw-bold">
                    About us
                  </span>
                  <h4 className="title mb-4 mt-3">
                    Introducing our expertise in the <br /> ECOMMERCE industry
                  </h4>
                  <p className="text-muted para-desc">
                    We specialise in the e-commerce space and have over 500
                    thousand merchants onboard with us and over 200 merchants
                    for managed services.
                  </p>
                  <p className="text-muted para-desc">
                    We believe that we can increase the value proposition as
                    well as minimise operating costs. It is always the right
                    time to use the opportunity to grow your business further.
                  </p>
                  <p className="text-muted para-desc">
                    Technology is essential for every business to fully optimise
                    its capability for further expansion in today’s environment.
                  </p>
                  <p className="text-muted para-desc">
                    Most Small and Medium sized Enterprises (SMEs) can’t justify
                    the expenses to hire a full time business IT Support
                    professional for the right kind of IT infrastructure and to
                    provide proper training for this position. That’s where we
                    come into the picture, to provide you the solutions and
                    services you need.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
