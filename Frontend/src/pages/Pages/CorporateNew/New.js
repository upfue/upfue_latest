import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, CardBody } from 'reactstrap';

//import images
import JackMa from '../../../assets/images/blog/JackMa.png';
import Alibaba from '../../../assets/images/Alibaba.jpg';
import ChatGPT from '../../../assets/images/ChatGPT.jpg';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          id: 1,
          img: JackMa,
          link: '/news-details',
          badge: 'Business',
          title:
            'Jack Ma, a former English teacher, met staff and toured classrooms at the Yungu School in Hangzhou',
          date: '28 March 2023',
        },
        {
          id: 2,
          img: Alibaba,
          link: '/news-details-1',
          badge: 'Business',
          title:
            'Alibaba to be splitted into 6 groups and explore IPOs to depart from Jack Ma era',
          date: '31 March 2023',
        },
        {
          id: 3,
          img: ChatGPT,
          link: '/news-details-2',
          badge: 'Business',
          title:
            'Quiet revolution of “boring AI”, taking over the golden era of ChatGPT',
          date: ' 4 April 2023',
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
              {(this.state.news || []).map((item, key) => (
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

export default New;
