import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//import images
import JackMaImg from '../../../assets/images/blog/JackMa.png';
import Wombo from '../../../assets/images/blog/Wombo.png';

class Newdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarCateListData: [
        // {
        //   title: 'Finance',
        //   count: '13',
        // },
        {
          title: 'Business',
          count: 1,
        },
        // {
        //   title: 'Blog',
        //   count: 18,
        // },
        // {
        //   title: 'Corporate',
        //   count: 20,
        // },
        // {
        //   title: 'Investment',
        //   count: 22,
        // },
      ],

      recentPostData: [
        {
          img: JackMaImg,
          title: 'JackMa',
          date: '28 March 2023',
        },
      ],

      tagCloudData: [
        { title: 'Business' },
        { title: 'Finance' },
        { title: 'Marketing' },
        { title: 'Fashion' },
        { title: 'Bride' },
        { title: 'Lifestyle' },
        { title: 'Travel' },
        { title: 'Beauty' },
        { title: 'Video' },
        { title: 'Audio' },
      ],

      iconListData: [
        { icon: 'facebook', link: '//www.facebook.com/upfuesg' },
        { icon: 'instagram', link: '//www.instagram.com/upfuesg/' },
        // { icon: 'twitter' },
        { icon: 'linkedin', link: '//www.linkedin.com/company/upfue/' },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row>
              <Col lg={8} md={6}>
                <div className="me-lg-5">
                  <p className="text-muted"></p>

                  <ul className="list-unstyled d-flex justify-content-between mt-4">
                    <li className="list-inline-item user me-2">
                      <Link to="#" className="text-muted">
                        <i className="uil uil-user text-dark"></i> Emily Leong
                      </Link>
                    </li>
                    <li className="list-inline-item date text-muted">
                      <i className="uil uil-calendar-alt text-dark">
                        &nbsp;13 April 2023
                      </i>
                    </li>
                  </ul>

                  <img
                    src={Wombo}
                    className="img-fluid rounded-md shadow"
                    alt=""
                  />

                  <h5 className="mt-4">
                    Dream by WOMBO, best AI art generator for phone
                  </h5>

                  <p className="text-muted">
                    Wombo Dream is an app that allows you to generate
                    personalised paintings using an AI assistant on your mobile
                    device. By entering a prompt and selecting from 17 distinct
                    styles ranging from watercolour to steampunk, you can create
                    a variety of unique artworks. The ability to regenerate the
                    image multiple times provides an endless array of results.
                    The app enables you to save your artwork, share it online,
                    and even order a printed version. While the app claims to
                    make art accessible to everyone, this may be an
                    overstatement or an innovative interpretation of the idea.
                    The majority of the work is done by the AI, and it is up to
                    the user to sift through the outcomes of their selected
                    prompt and style. In essence, it is a process of
                    discovery-based creation.
                  </p>
                  <a>#AI&nbsp;</a>
                </div>
              </Col>

              <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="card border-0 sidebar sticky-bar rounded shadow">
                  <div className="card-body">
                    <div className="widget">
                      <form role="search" method="get">
                        <div className="input-group mb-3 border rounded">
                          <input
                            type="text"
                            id="s"
                            name="s"
                            className="form-control border-0"
                            placeholder="Search Keywords..."
                          />
                          <button
                            type="submit"
                            className="input-group-text bg-transparent border-0"
                            id="searchsubmit"
                          >
                            <i className="uil uil-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="widget mb-4 pb-2">
                      <h5 className="widget-title">Categories</h5>
                      <ul className="list-unstyled mt-4 mb-0 blog-categories">
                        {this.state.sideBarCateListData.map((item, key) => (
                          <li key={key}>
                            <Link to="#">{item.title}</Link>{' '}
                            <span className="float-end">{item.count}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="widget mb-4 pb-2">
                      <h5 className="widget-title">Recent Post</h5>
                      <div className="mt-4">
                        {this.state.recentPostData.map((item, key) => (
                          <div key={key} className="clearfix post-recent">
                            <div className="post-recent-thumb float-start">
                              {' '}
                              <Link to="#">
                                {' '}
                                <img
                                  alt="img"
                                  src={item.img}
                                  className="img-fluid rounded"
                                />
                              </Link>
                            </div>
                            <div className="post-recent-content float-start">
                              <Link to="#">{item.title}</Link>
                              <span className="text-muted mt-2">
                                {item.date}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="widget mb-4 pb-2">
                      <h5 className="widget-title">Tags Cloud</h5>
                      <div className="tagcloud mt-4">
                        <Link to="#" className="rounded">
                          Business
                        </Link>{' '}
                        <Link to="#" className="rounded">
                          Finance
                        </Link>{' '}
                        <Link to="#" className="rounded">
                          Marketing
                        </Link>{' '}
                        <Link to="#" className="rounded">
                          Fashion
                        </Link>{' '}
                        <Link to="#" className="rounded">
                          Bride
                        </Link>{' '}
                        <Link to="#" className="rounded">
                          Lifestyle
                        </Link>{' '}
                        <Link to="#" className="rounded">
                          Travel
                        </Link>{' '}
                        <Link to="#" className="rounded">
                          Beauty
                        </Link>{' '}
                        <Link to="#" className="rounded">
                          Video
                        </Link>{' '}
                        <Link to="#" className="rounded">
                          Audio
                        </Link>
                      </div>
                    </div>

                    <div className="widget">
                      <h5 className="widget-title">Follow us</h5>
                      <ul className="list-unstyled social-icon social mb-0 mt-4">
                        {this.state.iconListData.map((item, key) => (
                          <li key={key} className="list-inline-item me-1">
                            <Link
                              target={'_blank'}
                              to={item.link}
                              className="rounded"
                            >
                              <FeatherIcon
                                icon={item.icon}
                                className="fea icon-sm fea-social"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Newdetails;
