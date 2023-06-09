import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardBody } from "reactstrap";


class Pricing extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.pricings.map((pricing, key) => (
          <Col
            name="pricing"
            lg={4} md={6} className="col-12 mt-5 pt-2"
            key={key}            
          >
            <Card
              name="pricingbox"
              className={
                pricing.isActive
                  ? "card pricing pricing-primary business-rate shadow border-0 rounded"
                  : "card pricing pricing-primary business-rate shadow bg-light border-0 rounded"
              }
            >
              {pricing.isActive && (
                <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                  <span className="text-center d-block shadow small h6">
                    Best
                  </span>
                </div>
              )}
              <CardBody>
                <h6
                  className={
                    pricing.isActive
                      ? "title fw-bold text-uppercase text-primary mb-4"
                      : "title name fw-bold text-uppercase mb-4"
                  }
                >
                  {pricing.title}
                </h6>
                <div className="d-flex mb-4" name="pricingsection">
                  <span className="h4 mb-0 mt-2">$</span>
                  <span className="price h1 mb-0">{pricing.price}</span>
                  <span className="h4 align-self-end mb-1">
                    /{pricing.duration}
                  </span>
                </div>

                <ul className="list-unstyled mb-0 ps-0">
                  {pricing.features.map((feature, key) => (
                    <li key={key} className="h6 text-muted mb-0">
                      <span className="icon h5 me-2">
                        <i className="uil uil-check-circle align-middle"></i>
                      </span>
                      {feature.title}
                    </li>
                  ))}
                </ul>
                <Link to="#" className="btn btn-primary mt-4">
                  {pricing.buttonText}
                </Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default Pricing;
