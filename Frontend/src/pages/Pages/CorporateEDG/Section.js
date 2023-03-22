import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//import images
import EDG from "../../../assets/images/EDG.png";

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 d-table w-100"
                    style={{ background: `url(${EDG})`, backgroundRepeat:`no-repeat`, backgroundSize: `100% 100%`,marginTop:`74px`}}
                >
                    <div className="bg-overlay"></div>
                    <Container>
                        <Row className="mt-5 justify-content-center">
                            <Col lg={12} className="text-center">
                                <h2 className="text-white para-desc mb-0 mx-auto">Government Grant EDG</h2>
                            </Col>
                        </Row>
                        <div className="position-breadcrumb">
                            <nav aria-label="breadcrumb" className="d-inline-block">
                                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                                    <li className="breadcrumb-item"><Link to="/">Upfue</Link></li>{" "}
                                    <li className="breadcrumb-item active" aria-current="page">EDG</li>
                                </ul>
                            </nav>
                        </div>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;