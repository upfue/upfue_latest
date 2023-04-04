import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  Label,
} from 'reactstrap';
import BackToTop from '../../../components/Layout/backToTop';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Images
import imgbg from '../../../assets/images/job/bg.png';
import Icon from '../../../assets/images/logo-icon.png';

class PageJobCompany extends Component {
  componentDidMount() {
    document.body.classList = '';
    document.querySelectorAll('#buyButton').forEach((navLink) => {
      navLink.classList.add('btn-light');
      navLink.classList.remove('btn-soft-primary');
    });
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.querySelector('.shoppingbtn').classList.remove('btn-light');
      document.querySelector('.settingbtn').classList.remove('btn-light');
      document.querySelector('.shoppingbtn').classList.add('btn-primary');
      document.querySelector('.settingbtn').classList.add('btn-soft-primary');
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.querySelector('.shoppingbtn').classList.remove('btn-primary');
      document
        .querySelector('.settingbtn')
        .classList.remove('btn-soft-primary');
      document.querySelector('.shoppingbtn').classList.add('btn-light');
      document.querySelector('.settingbtn').classList.add('btn-light');
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        {
          title: 'Full Stack Developer',
          icon: 'monitor',
          location: 'Singapore, SG',
        },
        {
          title: 'Front-End Developer',
          icon: 'airplay',
          location: 'Singapore, SG',
        },
        {
          title: 'Back-End Developer',
          icon: 'cpu',
          location: 'Singapore, SG',
        },
        { title: 'UI/UX Designer', icon: 'hexagon', location: 'Singapore, SG' },
        { title: 'Graphic Designer', icon: 'figma', location: 'Singapore, SG' },
        {
          title: 'Executive Assistant to Director',
          icon: 'crop',
          location: 'Singapore, SG',
        },
        {
          title: 'Digital Content Creator',
          icon: 'crop',
          location: 'Singapore, SG',
        },
        {
          title: 'IOS/Android Developer',
          icon: 'crop',
          location: 'Singapore, SG',
        },
      ],

      companyDetailList: [
        { titleLeft: 'Location', titleRight: 'singapore', icon: 'map-pin' },
        { titleLeft: 'Comapny ', titleRight: 'upfue.com', icon: 'link' },
        {
          titleLeft: 'Revenue ',
          titleRight: '$ 2M / Annual',
          icon: 'dollar-sign',
        },
        { titleLeft: 'No. of employees ', titleRight: '< 50', icon: 'users' },
      ],

      modal: false,
    };
    this.togglemodal.bind(this);
  }

  togglemodal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <section
          className="bg-half-260 bg-primary d-table w-100"
          style={{ backgroundImage: `url(${imgbg})` }}
        ></section>
        <section className="section">
          <Container>
            <Row>
              <Col lg="4" md="5" xs="12">
                <div className="job-profile position-relative">
                  <div className="rounded shadow bg-white">
                    <div className="text-center py-5 border-bottom">
                      <img
                        src={Icon}
                        className="avatar avatar-medium mx-auto rounded-circle d-block"
                        alt=""
                      />
                      <h5 className="mt-3 mb-0">UPFUE</h5>
                      <p className="text-muted mb-0">
                        Information Technology Industry
                      </p>
                    </div>

                    <div className="p-4">
                      <h5>Company Details :</h5>
                      <ul className="list-unstyled mb-4 text-uppercase">
                        {this.state.companyDetailList.map((item, key) => (
                          <li key={key} className="h6">
                            <i>
                              <FeatherIcon
                                icon={item.icon}
                                className="fea icon-sm text-warning me-3"
                              />
                            </i>
                            <span className="text-muted">
                              {item.titleLeft} :{' '}
                            </span>
                            {item.titleRight}
                          </li>
                        ))}
                      </ul>
                      <div className="d-grid">
                        <Link
                          to="#"
                          onClick={this.togglemodal}
                          className="btn btn-primary"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="map mt-4 pt-2">
                    <iframe
                      title="uniqueTitle"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2606.9028529526236!2d103.84641103971589!3d1.3263683636667938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da174babfed687%3A0x2a0d9977011f2842!2sHiap%20Hoe%20Building%20At%20Zhongshan%20Park!5e0!3m2!1szh-CN!2sru!4v1679306219880!5m2!1szh-CN!2sru"
                      style={{ border: '0' }}
                      className="rounded"
                      allowFullScreen=""
                    ></iframe>
                  </div>
                </div>
              </Col>

              <Col lg="8" md="7" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="ms-md-4">
                  <h4>About us :</h4>
                  <p className="text-muted">
                    Upfue is a specialised organization that develops and
                    delivers technology-based products, services, and solutions.
                    Our company offers a comprehensive range of services,
                    including software development, IT consulting, system
                    integration, data management, and cybersecurity, among
                    others.
                  </p>
                  <p className="text-muted">
                    Our team is made up of highly skilled professionals,
                    including software engineers, developers, data scientists,
                    cybersecurity experts, and project managers, who work
                    collaboratively to design and develop innovative
                    technologies that solve complex problems and meet the needs
                    of our clients and customers.
                  </p>
                  <p className="text-muted mb-0">
                    We have a particular focus on serving specific industries,
                    such as healthcare, finance, and retail, while also
                    providing general IT services to a wide range of clients
                    across various industries.
                  </p>
                  <p className="text-muted mb-0">
                    In today's digital age, Upfue plays a crucial role in
                    enabling businesses and organisations to operate efficiently
                    and effectively. We are at the forefront of technological
                    innovation and continuously develop new solutions to help
                    businesses stay ahead of the competition.
                  </p>

                  <Row>
                    {this.state.jobs.map((job, key) => (
                      <Col lg="6" key={key} className="mt-4 pt-2">
                        <Link to="/job-details" className="text-dark">
                          <div className="key-feature d-flex align-items-center p-3 bg-white rounded shadow">
                            <div className="icon text-center rounded-circle me-3">
                              <i>
                                <FeatherIcon
                                  icon={job.icon}
                                  className="fea icon-ex-md text-primary"
                                />
                              </i>
                            </div>
                            <div className="content">
                              <h4 className="title mb-0">{job.title}</h4>
                              <p className="text-muted mb-0">{job.location}</p>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    ))}
                    <Col xs="12" className="mt-4 pt-2">
                      <Link to="/job-list" className="btn btn-primary">
                        See All Jobs{' '}
                        <i className="uil uil-angle-right-b align-middle"></i>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Modal
          isOpen={this.state.modal}
          role="dialog"
          centered={true}
          id="trialform"
        >
          <ModalHeader toggle={this.togglemodal}>Apply now</ModalHeader>
          <ModalBody className="p-4">
            <Form>
              <Row>
                <Col md="6">
                  <div className="mb-3">
                    <Label className="form-label">
                      Your Name :<span className="text-danger">*</span>
                    </Label>
                    <div className="form-icon position-relative">
                      <i>
                        <FeatherIcon
                          icon="user"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control ps-5"
                        required
                        placeholder="First Name :"
                      />
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="mb-3">
                    <Label className="form-label">
                      Your Email :<span className="text-danger">*</span>
                    </Label>
                    <div className="form-icon position-relative">
                      <i>
                        <FeatherIcon
                          icon="mail"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control ps-5"
                        required
                        placeholder="Your email :"
                      />
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="mb-3">
                    <Label className="form-label">
                      Your Phone no. :<span className="text-danger">*</span>
                    </Label>
                    <div className="form-icon position-relative">
                      <i>
                        <FeatherIcon
                          icon="phone"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        name="number"
                        id="number"
                        type="number"
                        className="form-control ps-5"
                        required
                        placeholder="Your phone no. :"
                      />
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="mb-3">
                    <Label className="form-label">Job Title :</Label>
                    <div className="form-icon position-relative">
                      <i>
                        <FeatherIcon
                          icon="book"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <Input
                        name="subject"
                        id="subject"
                        className="form-control ps-5"
                        required
                        placeholder="Title :"
                      />
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="mb-3">
                    <Label className="form-label">Types of jobs :</Label>
                    <select
                      className="form-select form-control"
                      id="Sortbylist-job"
                    >
                      <option>All Jobs</option>
                      <option>Full Time</option>
                      <option>Half Time</option>
                      <option>Remote</option>
                      <option>In Office</option>
                    </select>
                  </div>
                </Col>
                <Col md="12">
                  <div className="mb-3">
                    <Label className="form-label">Description :</Label>
                    <div className="form-icon position-relative">
                      <i>
                        <FeatherIcon
                          icon="message-circle"
                          className="fea icon-sm icons"
                        />
                      </i>
                      <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        className="form-control ps-5"
                        required
                        placeholder="Describe the job :"
                      ></textarea>
                    </div>
                  </div>
                </Col>
                <Col md="12">
                  <div className="mb-3">
                    <Label className="form-label">
                      Upload Your Cv / Resume :
                    </Label>
                    <Input
                      type="file"
                      className="form-control"
                      required
                      id="fileupload"
                    />
                  </div>
                </Col>
                <Col md="12">
                  <div className="mb-3">
                    <div className="form-check">
                      <Input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck1"
                      />
                      <Label className="form-check-label" for="customCheck1">
                        I Accept{' '}
                        <Link to="#" className="text-primary">
                          Terms And Condition
                        </Link>
                      </Label>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                  <input
                    type="submit"
                    id="submit"
                    name="send"
                    className="submitBnt btn btn-primary"
                    value="Apply Now"
                  />
                </Col>
              </Row>
            </Form>
          </ModalBody>
        </Modal>
        <BackToTop />
      </React.Fragment>
    );
  }
}

export default PageJobCompany;
