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
                    <h2>The Productivity Solutions Grant (PSG)</h2>
                    <ul>
                      <li>
                        PSG - Productivity Solutions Grant is a government
                        funding for SME that aims to help businesses enhance
                        their processes with technology.
                      </li>
                      <li>Which means you can get up to 70% PSG funding</li>
                      <li>About the Productivity Solutions Grant (PSG):</li>
                      <ul>
                        <li>Helping Business Go Digital</li>
                        <li>
                          To help Small and Medium-Sized Enterprises (SMEs) grow
                          through digitalisation, the Singapore government
                          launched the Productivity Solutions Grant (PSG)
                          encouraging businesses to adopt digital productivity
                          solutions.
                        </li>
                        <li>
                          Living in a fast-growing digital age, it is imperative
                          for businesses to adapt and move towards digital
                          platforms. As such, PSG aims to support companies to
                          enhance existing processes through information
                          technology, improving on their businesses’ overall
                          efficiency and effectiveness.
                        </li>
                      </ul>
                    </ul>
                    <p>
                      Technology is not about fancy and expensive high-end
                      solutions. You can kick-start your technology journey by
                      taking simple steps to automate existing processes and
                      improve productivity. The Productivity Solutions Grant
                      (PSG) supports companies keen on adopting IT solutions and
                      equipment to enhance business processes.
                    </p>
                    <p>
                      For a start, PSG covers sector-specific solutions
                      including the retail, food, logistics, precision
                      engineering, construction and landscaping industries.
                      Other than sector-specific solutions, PSG also supports
                      adoption of solutions that cut across industries, such as
                      in areas of customer management, data analytics, financial
                      management and inventory tracking.
                    </p>
                    <p>
                      These solutions have been pre-scoped by various government
                      agencies such as Enterprise Singapore, National
                      Environmental Agency (NEA) and Singapore Tourism Board
                      (STB).
                    </p>
                    <Link
                      to="//www.enterprisesg.gov.sg/financial-assistance/grants/for-local-companies/productivity-solutions-grant"
                      target={'_blank'}
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
                        Company’s Group annual sales turnover should be not more
                        than S$100 million, OR Company's Group employment size
                        should be no more than 200 employees
                      </li>
                      <li>
                        Purchase/lease/subscription of the IT solutions or
                        equipment must be used in Singapore
                      </li>
                    </ul>
                    <p>
                      Employers eligible for the SkillsFuture Enterprise Credits
                      (SFEC) can also qualify for additional subsidies under the
                      scheme.
                    </p>
                    <Link
                      to="//www.enterprisesg.gov.sg/financial-assistance/grants/for-local-companies/productivity-solutions-grant"
                      target={'_blank'}
                      className="text-primary"
                    >
                      See More{' '}
                      <i className="uil uil-angle-right-b align-middle"></i>
                    </Link>
                  </div>
                </TabPane>

                <TabPane
                  className="fade bg-white p-4  show rounded shadow"
                  tabId="3"
                >
                  <div className="mt-4">
                    <h2>
                      Here are the things you need to prepare when applying for
                      PSG:
                    </h2>
                    <ul>
                      <li>Application submission</li>
                      <li>Acceptance of Letter of Offer</li>
                      <li>Claim submission</li>
                    </ul>
                    <Link
                      to="//www.enterprisesg.gov.sg/financial-assistance/grants/for-local-companies/productivity-solutions-grant"
                      target={'_blank'}
                      className="text-primary"
                    >
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
