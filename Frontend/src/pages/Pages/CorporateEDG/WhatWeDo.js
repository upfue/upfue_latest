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

import work1 from '../../../assets/images/work/7.jpg';
import work2 from '../../../assets/images/work/8.jpg';
import work3 from '../../../assets/images/work/9.jpg';
import work4 from '../../../assets/images/work/12.jpg';
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
        <Container className="my-5">
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
                      <h6 className="mb-0 text-capitalize">overview</h6>
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
                      <h6 className="mb-0 text-capitalize">Eligibility</h6>
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
                      <h6 className="mb-0 text-capitalize">apply</h6>
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
                  <div className="mt-4">
                    <h2>Enterprise Development Grant (EDG)</h2>
                    <ul>
                      <li>
                        The Enterprise Development Grant (EDG) helps Singapore
                        companies grow and transform. This grant supports
                        projects that help you upgrade your business, innovate
                        or venture overseas, under three pillars:
                      </li>

                      <ul>
                        <li>
                          <span className="fw-bold">Core Capabilities: </span>
                          Projects under Core Capabilities help businesses
                          prepare for growth and transformation by strengthening
                          their business foundations. These should go beyond
                          basic functions such as sales and accounting.
                        </li>
                        <li>
                          <span className="fw-bold">
                            Innovation and Productivity:{' '}
                          </span>
                          Projects under Innovation and Productivity support
                          companies that explore new areas of growth, or look
                          for ways to enhance efficiency, or optimise resource
                          usage to improve their sustainability performance.
                          These could include reviewing and redesigning workflow
                          and processes. Companies could also tap into
                          automation and technologies to make routine tasks more
                          efficient and sustainable.
                        </li>
                        <li>
                          <span className="fw-bold">Market Access: </span>
                          Projects under Market Access support Singapore
                          companies that are willing and ready to venture
                          overseas. You may tap into the EDG to help defray some
                          of the costs of expanding into overseas markets.
                        </li>
                      </ul>
                    </ul>
                    <Link
                      to="//www.enterprisesg.gov.sg/financial-assistance/grants/for-local-companies/enterprise-development-grant/overview"
                      target={`_blank`}
                      className="text-primary"
                    >
                      See More{' '}
                      <i className="uil uil-angle-right-b align-middle"></i>
                    </Link>
                  </div>
                </TabPane>

                <TabPane
                  className="fade bg-white p-4 show rounded shadow"
                  tabId="2"
                >
                  <div className="mt-4">
                    <h2>SME should meet the following criteria:</h2>
                    <ul>
                      <li>
                        Is a business entity registered and operating in
                        Singapore
                      </li>
                      <li>Has at least 30% local shareholding</li>
                      <li>
                        Be in a financially viable position to start and
                        complete the project
                      </li>
                    </ul>
                    <p>
                      Employers eligible for the SkillsFuture Enterprise Credits
                      (SFEC) can also qualify for additional subsidies under the
                      scheme.
                    </p>
                    <p>
                      Applications will be assessed by Enterprise Singapore
                      based on project scope, project outcomes and competency of
                      service provider.
                    </p>
                  </div>
                  <Link
                    to="//www.enterprisesg.gov.sg/financial-assistance/grants/for-local-companies/enterprise-development-grant/overview"
                    target={`_blank`}
                    className="text-primary"
                  >
                    See More{' '}
                    <i className="uil uil-angle-right-b align-middle"></i>
                  </Link>
                </TabPane>

                <TabPane
                  className="fade bg-white p-4  show rounded shadow"
                  tabId="3"
                >
                  <div className="mt-4">
                    <h1>Application</h1>
                    <p>
                      There are no compulsory application fees required for
                      schemes offered by ESG. Any application fees quoted by
                      individuals/ firms offering grant application services are
                      not endorsed by the Government.
                    </p>
                    <Link to="//www.enterprisesg.gov.sg/financial-assistance/grants/for-local-companies/enterprise-development-grant/overview" target={`_blank`} className="text-primary">
                      See More{' '}
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
