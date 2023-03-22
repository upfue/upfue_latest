import React from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";
import { Link } from 'react-router-dom';

const KeyFeature = () => {
    return (
        <React.Fragment>
            <section className="py-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col className="col-12 text-center">
                            <div className="section-title mb-4 pb-2">
                                <h4 className="title mb-4">Key Features</h4>
                                <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary fw-bold">UPFUE</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">                                   
                                    <FeatherIcon icon="monitor" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Fully Responsive Website</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">                                 
                                    <FeatherIcon icon="heart" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Browser Compatibility</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon icon="eye" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Web Hosting</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon icon="bold" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Governement Grants</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">                                 
                                    <FeatherIcon icon="feather" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Mobile Development</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon icon="code" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">Web Development</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon icon="user-check" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">IT support</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon icon="git-merge" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">E-Commerce Operations</h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} className="mt-4 pt-2">
                            <div className="d-flex features feature-primary key-feature align-items-center p-3 rounded shadow">
                                <div className="icon text-center rounded-circle me-3">
                                    <FeatherIcon icon="settings" className="fea icon-ex-md"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="title mb-0">UI/UX Design</h4>
                                </div>
                            </div>
                        </Col>

                        <div className="col-12 mt-4 pt-2 text-center">
                            <Link to="/service" className="btn btn-primary">See More <i className="mdi mdi-arrow-right"></i></Link>
                        </div>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default KeyFeature;