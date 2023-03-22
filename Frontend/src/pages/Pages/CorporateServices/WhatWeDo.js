import React, { Component } from 'react';
import {
  Col,
  Container,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import classnames from 'classnames';

import work1 from '../../../assets/images/Ecommerce.jpg';
import work2 from '../../../assets/images/Software.jpg';
import work3 from '../../../assets/images/Web.jpg';
import work4 from '../../../assets/images/Mobile.jpg';
import work5 from '../../../assets/images/Server.jpg';
import work6 from '../../../assets/images/System.jpg';
import work7 from '../../../assets/images/IT.jpg';
import { Link } from 'react-router-dom';

class WhatWeDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle(tab) {
    this.setState({ activeTab: tab });
  }

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-end mb-4 pb-4">
            <Col md={8}>
              <div className="section-title text-center text-md-start">
                <h6 className="text-primary">Services</h6>
                <h4 className="title mb-4">What we do ?</h4>
                <p className="text-muted mb-0 para-desc">
                  Start working with{' '}
                  <span className="text-primary fw-bold">Upfue</span> that can
                  provide everything you need to generate awareness, drive
                  traffic, connect.
                </p>
              </div>
            </Col>

            <Col md={4} className="mt-4 mt-sm-0">
              <div className="text-center text-md-end">
                <Link to="#" className="text-primary h6">
                  See More{' '}
                  <i className="uil uil-angle-right-b align-middle"></i>
                </Link>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mt-4 pt-2">
              <ul className="nav nav-pills nav-justified flex-column rounded shadow p-3 mb-0 sticky-bar">
                <NavItem>
                  <NavLink
                    to="#"
                    className={classnames(
                      { active: this.state.activeTab === '1' },
                      'rounded',
                    )}
                    onClick={() => {
                      this.toggle('1');
                    }}
                  >
                    <div className="text-center py-1">
                      <h6 className="mb-0">E-commerce Operations</h6>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem className="mt-2">
                  <NavLink
                    to="#"
                    className={classnames(
                      { active: this.state.activeTab === '2' },
                      'rounded',
                    )}
                    onClick={() => {
                      this.toggle('2');
                    }}
                  >
                    <div className="text-center py-1">
                      <h6 className="mb-0">Software Development</h6>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem className="mt-2">
                  <NavLink
                    to="#"
                    className={classnames(
                      { active: this.state.activeTab === '3' },
                      'rounded',
                    )}
                    onClick={() => {
                      this.toggle('3');
                    }}
                  >
                    <div className="text-center py-1">
                      <h6 className="mb-0">Web Development</h6>
                    </div>
                  </NavLink>
                </NavItem>

                <NavItem className="mt-2">
                  <NavLink
                    to="#"
                    className={classnames(
                      { active: this.state.activeTab === '4' },
                      'rounded',
                    )}
                    onClick={() => {
                      this.toggle('4');
                    }}
                  >
                    <div className="text-center py-1">
                      <h6 className="mb-0">Mobile Development</h6>
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem className="mt-2">
                  <NavLink
                    to="#"
                    className={classnames(
                      { active: this.state.activeTab === '5' },
                      'rounded',
                    )}
                    onClick={() => {
                      this.toggle('5');
                    }}
                  >
                    <div className="text-center py-1">
                      <h6 className="mb-0">Server Deployment</h6>
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem className="mt-2">
                  <NavLink
                    to="#"
                    className={classnames(
                      { active: this.state.activeTab === '6' },
                      'rounded',
                    )}
                    onClick={() => {
                      this.toggle('6');
                    }}
                  >
                    <div className="text-center py-1">
                      <h6 className="mb-0">System Integration</h6>
                    </div>
                  </NavLink>
                </NavItem>
                <NavItem className="mt-2">
                  <NavLink
                    to="#"
                    className={classnames(
                      { active: this.state.activeTab === '7' },
                      'rounded',
                    )}
                    onClick={() => {
                      this.toggle('7');
                    }}
                  >
                    <div className="text-center py-1">
                      <h6 className="mb-0">IT Services</h6>
                    </div>
                  </NavLink>
                </NavItem>
              </ul>
            </Col>

            <Col md={8} xs={12} className="mt-4 pt-2">
              <TabContent activeTab={this.state.activeTab}>
                <TabPane
                  className="fade bg-white show p-4 rounded shadow"
                  tabId="1"
                >
                  <img
                    src={work1}
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h1 className="text-uppercase text-primary">
                      Ecommerce Operations
                    </h1>
                    <h4 className="text-uppercase">
                      WHAT DO WE DO FOR ECOMMERCE OPERATION?
                    </h4>
                    <ul>
                      <li>Design For You Ecommerce Products</li>
                      <li>Provide Customer Service With Your Customers</li>
                      <li>Provide International Air Fleet</li>
                      <li>Provide International Payment</li>
                      <li>Uploading Of Products On E-Commerce Platforms</li>
                      <li>
                        Include Subscription Fee (Add In Pricing) For Ecommerce
                        Operation. (Come Up With Package)
                      </li>
                    </ul>
                    <Link to="/contact" className="text-primary">
                      Contact us for details
                      <i className="uil uil-angle-right-b align-middle"></i>
                    </Link>
                  </div>
                </TabPane>

                <TabPane
                  className="fade bg-white p-4 show rounded shadow"
                  tabId="2"
                >
                  <img
                    src={work2}
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h1 className="text-uppercase text-primary">
                      SOFTWARE DEVELOPMENT
                    </h1>
                    <p>
                      Software Development Is The Process Of Conceiving,
                      Specifying, Designing, Programming, Documenting, Testing,
                      And Bug Fixing Involved In Creating And Maintaining
                      Applications, Frameworks, Or Other Software Components.
                    </p>
                    <Link to="/contact" className="text-primary">
                      Contact us for details
                      <i className="uil uil-angle-right-b align-middle"></i>
                    </Link>
                  </div>
                </TabPane>

                <TabPane
                  className="fade bg-white p-4  show rounded shadow"
                  tabId="3"
                >
                  <img
                    src={work3}
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h2 className="text-primary text-uppercase">
                      WEB DEVELOPMENT
                    </h2>
                    <h4>What Do We Do For Web Development?</h4>
                    <ul>
                      <li>
                        Provide Users With An Engaging Online Platform To Access
                        Their Products And Services
                      </li>
                      <li>
                        The Web Development Process Includes :
                        <ul className="text-primary">
                          <li>Web Design</li>
                          <li>Web Content Development</li>
                          <li>
                            Client-Side/Server-Side Scripting Network Security
                            Configuration
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <Link to="/contact" className="text-primary">
                      Contact us for details
                      <i className="uil uil-angle-right-b align-middle"></i>
                    </Link>
                  </div>
                </TabPane>

                <TabPane
                  className="fade bg-white show p-4 rounded shadow"
                  tabId="4"
                >
                  <img
                    src={work4}
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h2 className="text-primary text-uppercase">
                      MOBILE DEVELOPMENT
                    </h2>
                    <h4>What Do We Do For Mobile Development?</h4>
                    <p className="text-muted">
                      Mobile application development is the process of creating
                      software applications that run on a mobile device, and a
                      typical mobile application utilises a network connection
                      to work with remote computing resources.
                    </p>
                    <ul>
                      <li>
                        Hence, The Mobile Development Process Involves :
                        <ul className="text-primary">
                          <li>
                            Creating Installable Software Bundles (Code,
                            Binaries, Assets, Etc.)
                          </li>
                          <li>
                            Implementing Backend Services Such As Data Access
                            With An API
                          </li>
                          <li>Testing The Application On Target Devices.</li>
                        </ul>
                      </li>
                    </ul>
                    <Link to="/contact" className="text-primary">
                      Contact us for details
                      <i className="uil uil-angle-right-b align-middle"></i>
                    </Link>
                  </div>
                </TabPane>
                <TabPane
                  className="fade bg-white show p-4 rounded shadow"
                  tabId="5"
                >
                  <img
                    src={work5}
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h2 className="text-primary text-uppercase">
                      SERVER DEPLOYMENT
                    </h2>
                    <h4>What Do We Do For Server Deployment?</h4>
                    <ul>
                      <li>Hosting Packages</li>
                      <li>
                        Server Deployment Is The Process Of Making A Server
                        Operational.
                      </li>
                      <li>
                        In Practice, Deployment Typically Involves Installing
                        The Hardware On A Server Rack And Configuring The
                        Software Required For The Server's Intended Function.
                      </li>
                    </ul>
                    <Link to="/contact" className="text-primary">
                      Contact us for details
                      <i className="uil uil-angle-right-b align-middle"></i>
                    </Link>
                  </div>
                </TabPane>
                <TabPane
                  className="fade bg-white show p-4 rounded shadow"
                  tabId="6"
                >
                  <img
                    src={work6}
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h2 className="text-primary text-uppercase">
                      SYSTEM INTEGRATION
                    </h2>
                    <h4>What Do We Do For System Integration?</h4>
                    <ul>
                      <li>
                        The Process Of Creating A Complex Information System
                        That May Include Designing
                      </li>
                      <li>Building A Customised Architecture Or Application</li>
                      <li>
                        Integrating It With New Or Existing Hardware, Packaged
                        And Custom Software
                      </li>
                      <li>
                        The Main Reason For Organisations To Use System
                        Integration Is Their Need To Improve The Productivity
                        And The Quality Of Their Operations.
                      </li>
                    </ul>
                    <Link to="/contact" className="text-primary">
                      Contact us for details
                      <i className="uil uil-angle-right-b align-middle"></i>
                    </Link>
                  </div>
                </TabPane>
                <TabPane
                  className="fade bg-white show p-4 rounded shadow"
                  tabId="7"
                >
                  <img
                    src={work7}
                    className="img-fluid rounded shadow"
                    alt=""
                  />
                  <div className="mt-4">
                    <h2 className="text-primary text-uppercase">IT SERVICES</h2>
                    <h4>What Do We Do For IT Services?</h4>
                    <ul>
                      <li>
                        All Organisations Need IT To Be Faster, Smarter, And
                        Better.
                      </li>
                      <li>
                        The Main Benefits Of Getting IT Support Services Are:
                        <ul className='text-primary'>
                          <li>
                            Direct Access To Trained, Experienced, And Qualified
                            Professionals.
                          </li>
                          <li>
                            This Is The Biggest Benefit Of IT Service
                            Management. You Do Not Have To Go Through The Hassle
                            Of Training People Or Hiring Employees To Function
                            As Your IT Team.
                          </li>
                          <li>
                            With An IT Firm Behind Your Back, You Are Assured Of
                            High-Quality Services.
                          </li>
                          <li>
                            You Have Better Access To The Latest Technology.
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <Link to="/contact" className="text-primary">
                      Contact us for details
                      <i className="uil uil-angle-right-b align-middle"></i>
                    </Link>
                  </div>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default WhatWeDo;
