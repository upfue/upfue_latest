import React, { Component, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

//Import Icons
import FeatherIcon from 'feather-icons-react';

//import images
import Synthesia from '../../../assets/video/Synthesia.mp4';
import JackMaImg from '../../../assets/images/blog/JackMa.png';
import axios from 'axios';
import moment from 'moment';

const BlogDetails = () => {
  const [blogInfo, setBlogInfo] = useState([]);
  const [authorInfo, setAuthorInfo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/api/v1/blog/${id}`)
      .then((res) => {
        setBlogInfo(res.data);
        setAuthorInfo(res.data.createdBy);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let date = moment(blogInfo.createdAt);
  date = date.format('Do MMM YYYY, LTS');
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
                      <i className="uil uil-user text-dark"></i>
                      &nbsp;
                      {authorInfo.name}
                    </Link>
                  </li>
                  <li className="list-inline-item date text-muted">
                    <i className="uil uil-calendar-alt text-dark">
                      &nbsp;{date}
                    </i>
                  </li>
                </ul>

                <img
                  src={
                    `/api/v1/blog/${id}/` +
                    blogInfo.blogImage
                  }
                  className="img-fluid rounded-md shadow"
                  alt=""
                />

                <h5 className="mt-4">{blogInfo.blogTitle}</h5>

                <p className="text-muted">{blogInfo.blogContent}</p>
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
                    <ul className="list-unstyled mt-4 mb-0 blog-categories"></ul>
                  </div>

                  <div className="widget mb-4 pb-2">
                    <h5 className="widget-title">Recent Post</h5>
                    <div className="mt-4"></div>
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
                    <ul className="list-unstyled social-icon social mb-0 mt-4"></ul>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogDetails;
