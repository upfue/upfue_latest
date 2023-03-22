import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

//Import Images
import img1 from "../../assets/images/client/chiapang.png";
import img2 from "../../assets/images/client/teamauto.png";
import img3 from "../../assets/images/client/aceauto.png";
import img4 from "../../assets/images/client/sincerelead.png";
import img5 from "../../assets/images/client/dingauto.png";

class Partners extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center" id="partners">
            <Col lg={2} md={2} className="col-6 text-center" id="partner1">
              <img src={img1} className="avatar avatar-lg" alt="" />
            </Col>

            <Col lg={2} md={2} className="col-6 text-center" id="partner2">
              <img src={img2} className="avatar avatar-lg" alt="" />
            </Col>

            <Col
              id="partner3"
              lg="2"
              md="2"
              xs="6"
              className="text-center"
            >
              <img src={img3} className="avatar avatar-lg" alt="" />
            </Col>

            <Col
              id="partner4"
              lg="2"
              md="2"
              xs="6"
              className="text-center"
            >
              <img src={img4} className="avatar avatar-lg" alt="" />
            </Col>

            <Col
              id="partner5"
              lg="2"
              md="2"
              xs="6"
              className="text-center"
            >
              <img src={img5} className="avatar avatar-lg" alt="" />
            </Col>
          </Row>
        </Container>

      </React.Fragment>
    );
  }
}

export default Partners;
