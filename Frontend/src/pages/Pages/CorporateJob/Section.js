import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Badge, Card, Input, Alert } from "reactstrap";

//React Typist
import Typist from 'react-typist';

//Import Images
import home from "../../../assets/images/job/home.png";

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 pb-0 bg-primary d-table w-100">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="10">
                                <div className="title-heading text-center mt-4 mt-md-5 pt-md-5">
                                    <Alert color="light" className="alert-pills">
                                        <Badge pill className="rounded-pill bg-success me-1">Start</Badge>
                                        <span className="content text-black"> Fill job <Link to="/job-apply" className="text-primary">application</Link> now !</span>
                                    </Alert>
                                    <h1 className="heading mb-3 text-white">Job Vacancies for{" "}
                                        <Typist>
                                            <span className="element text-white">Freelancer</span>
                                            <Typist.Backspace count={15} delay={400} />
                                            <span className="element text-white">Developer</span>
                                            <Typist.Backspace count={20} delay={400} />
                                            <span className="element text-white">Designer</span>
                                            <Typist.Backspace count={17} delay={400} />
                                            <span className="element text-white">UX Developer</span>
                                            <Typist.Backspace count={15} delay={500} />
                                            <span className="element text-white">ios Developer</span>
                                            <Typist.Backspace count={20} delay={500} />
                                        </Typist>
                                    </h1>
                                    <p className="para-desc mx-auto text-white">Huge community of designers and developers ready for your project.</p>
                                    <Card className="rounded p-4 mt-4">
                                        <Row className="text-start">
                                            <Col lg="5" md="4">
                                                <div className="mb-0">
                                                    <Input type="text" className="form-control text-white" required placeholder="Keywords" />
                                                </div>
                                            </Col>

                                            <Col lg="7" md="8">
                                                <Row className="align-items-center">
                                                    <Col md="4" className="mt-4 mt-sm-0">
                                                        <div className="mb-0">
                                                            <select className="form-control custom-select">
                                                                <option defaultValue="">Location</option>
                                                                <option value="AF">Afghanistan</option>
                                                                <option value="AX">&Aring;land Islands</option>
                                                                <option value="AL">Albania</option>
                                                                <option value="DZ">Algeria</option>
                                                                <option value="AS">American Samoa</option>
                                                                <option value="AD">Andorra</option>
                                                                <option value="AO">Angola</option>
                                                                <option value="AI">Anguilla</option>
                                                                <option value="AQ">Antarctica</option>
                                                            </select>
                                                        </div>
                                                    </Col>

                                                    <Col md="4" className="mt-4 mt-sm-0">
                                                        <div className="mb-0">
                                                            <select className="form-control custom-select">
                                                                <option defaultValue="">Job Types</option>
                                                                <option value="4">Accounting</option>
                                                                <option value="1">IT & Software</option>
                                                                <option value="3">Marketing</option>
                                                                <option value="5">Banking</option>
                                                            </select>
                                                        </div>
                                                    </Col>

                                                    <Col md="4" className="mt-4 mt-sm-0">
                                                        <div className="d-grid">
                                                            <input type="submit" id="search" name="search" className="searchbtn btn btn-primary" value="Search" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                    <p className="text-white-50 mb-0 mt-4"><span className="text-white">Keywords :</span> Web Developer, Web Designer, PHP Developer, IOS Developer, etc...</p>
                                </div>
                            </Col>

                            <Col xs="12" className="mt-4 pt-3">
                                <img src={home} className="img-fluid" alt="" />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;