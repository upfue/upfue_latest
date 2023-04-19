import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, CardBody } from 'reactstrap';

//import images
import Syntehsia from '../../../assets/images/blog/Synthesia.png';
import GoCharlie from '../../../assets/images/blog/GoCharlie.png';
import Fliki from '../../../assets/images/blog/Fliki.png';
import InVideo from '../../../assets/images/blog/InVideo.png';
import Descript from '../../../assets/images/blog/Descript.png';
import DallE from '../../../assets/images/blog/DallE.png';
import Zyro from '../../../assets/images/blog/Zyro.png';
import Artbreeder from '../../../assets/images/blog/Artbreeder.png';
import Wombo from '../../../assets/images/blog/Wombo.png';
import { useAppContext } from '../../../context/appContext';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          id: 1,
          img: Syntehsia,
          link: '/blog-details',
          badge: 'AI',
          title: 'Synthesia, #1 rated AI video creation platform.',
          date: '29 March 2023',
        },
        {
          id: 2,
          img: GoCharlie,
          link: '/blog-details-1',
          badge: 'AI',
          title: 'GoCharlie, new AI marketing assistant for content creation',
          date: '30 March 2023',
        },
        {
          id: 3,
          img: Fliki,
          link: '/blog-details-2',
          badge: 'AI',
          title: 'Fliki, text to speech video creation with synthetic voices.',
          date: '1 April 2023',
        },
        {
          id: 4,
          img: InVideo,
          link: '/blog-details-3',
          badge: 'AI',
          title: 'InVideo, turning a script into a video',
          date: '3 April 2023',
        },
        {
          id: 5,
          img: Descript,
          link: '/blog-details-4',
          badge: 'AI',
          title: 'Descript, edit videos as easy as using docs or slides',
          date: '5 April 2023',
        },
        {
          id: 6,
          img: DallE,
          link: '/blog-details-5',
          badge: 'AI',
          title: 'DALL·E 2,  the newest AI model by OpenAI',
          date: '8 April 2023',
        },
        {
          id: 7,
          img: Zyro,
          link: '/blog-details-6',
          badge: 'AI',
          title: 'Zyro, feature-rich website builder',
          date: '10 April 2023',
        },
        {
          id: 8,
          img: Wombo,
          link: '/blog-details-7',
          badge: 'AI',
          title: 'Dream by WOMBO, best AI art generator for phone',
          date: '13 April 2023',
        },
        {
          id: 9,
          img: Artbreeder,
          link: '/blog-details-8',
          badge: 'AI',
          title: 'Artbreeder, Automatic Art Generator',
          date: '14 April 2023',
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row>
              {(this.state.blogs || []).map((item, key) => (
                <Col
                  lg={4}
                  md={6}
                  xs={12}
                  key={key}
                  className="mb-4 pb-2 d-flex"
                >
                  <Card className="border-0 blog shadow overflow-hidden">
                    <Link to={item.link}>
                      <img src={item.img} className="img-fluid" alt="" />
                    </Link>

                    <CardBody className="content">
                      <ul className="list-unstyled d-flex justify-content-between">
                        <li className="text-muted">{item.date}</li>
                        <li className="text-muted">
                          <Link to="#" className="badge bg-soft-primary">
                            {item.badge}
                          </Link>
                        </li>
                      </ul>

                      <h5>
                        <Link to="#" className="card-title title text-dark">
                          {item.title}
                        </Link>
                      </h5>

                      <div className="post-meta d-flex justify-content-between mt-3">
                        <Link to={item.link} className="text-muted readmore">
                          Read More{' '}
                          <i className="uil uil-angle-right-b align-middle"></i>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
              <div className="col-12">
                <ul className="pagination justify-content-center mb-0">
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Previous">
                      Prev
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Next">
                      Next
                    </Link>
                  </li>
                </ul>
              </div>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Blog;
