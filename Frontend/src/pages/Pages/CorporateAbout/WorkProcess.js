import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import Icon from '../../../assets/images/logo-icon.png'

const WorkProcess = () => {
  return (
    <React.Fragment>
      <Container className=' mb-5'>
      <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <h2 className="text-primary text-uppercase">Our Values</h2>
                <img src={Icon} alt="" width={96}/>
              </div>
            </Col>
          </Row>
        <Row>
          <Col md={4} className="mt-4 pt-2">
            <Card className="features feature-primary feature-clean work-process bg-transparent process-arrow border-0 text-center">
              <div className="icons text-center mx-auto">
                <i className="uil uil-presentation-edit d-block rounded h3 mb-0"></i>
              </div>

              <CardBody>
                <h5 className="text-dark">Serious About Quality Service</h5>
                <p className="text-muted mb-0">
                  UPFUE is serious about quality service and response time
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md={4} className="mt-md-5 pt-md-3 mt-4 pt-2">
            <Card className="features feature-primary feature-clean work-process bg-transparent process-arrow border-0 text-center">
              <div className="icons text-center mx-auto">
                <i className="uil uil-airplay d-block rounded h3 mb-0"></i>
              </div>

              <CardBody>
                <h5 className="text-dark">Value-centricity</h5>
                <p className="text-muted mb-0">
                  With a value-centric approach, UPFUE leverages a strong set of
                  beliefs and values that translate into why we do what we do.
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md={4} className="mt-md-5 pt-md-5 mt-4 pt-2">
            <Card className="features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
              <div className="icons text-primary text-center mx-auto">
                <i className="uil uil-image-check d-block rounded h3 mb-0"></i>
              </div>

              <CardBody>
                <h5 className="text-dark">Customer Focus</h5>
                <p className="text-muted mb-0">
                  UPFUE believes in putting our customer needs first
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mt-4 pt-2">
            <Card className="features feature-primary feature-clean work-process bg-transparent process-arrow border-0 text-center">
              <div className="icons text-center mx-auto">
                <i className="uil uil-accessible-icon-alt d-block rounded h3 mb-0"></i>
              </div>

              <CardBody>
                <h5 className="text-dark">Constant Improvement</h5>
                <p className="text-muted mb-0">
                  UPFUE believes in continuous improvement, the ongoing
                  improvement of products, services or processes through
                  incremental and breakthrough improvements etc.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} className="mt-4 pt-2">
            <Card className="features feature-primary feature-clean work-process bg-transparent border-0 text-center">
              <div className="icons text-center mx-auto">
                <i className="uil uil-abacus d-block rounded h3 mb-0"></i>
              </div>
              <CardBody>
                <h5 className="text-dark">Innovation</h5>
                <p className="text-muted mb-0">
                  UPFUE believes in the implementation of a new product or
                  services
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default WorkProcess;
