import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, CardBody } from 'reactstrap';
import NewsFrontend from '../../../components/NewsFrontend';
import Loading from '../../../components/Loading';
import Wrapper from '../../../components/Wrapper/BlogContainer';
import axios from 'axios';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      isLoading: false,
      page: 1,
    };
  }
  componentDidMount() {
    axios
      .get('/api/v1/news/all-news')
      .then((res) => {
        this.setState({ news: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { isLoading, news, totalNews } = this.state;
    if (isLoading) {
      return <Loading center />;
    }

    if (news.length === 0) {
      return (
        <Wrapper>
          <h1 className="text-center" style={{ margin: `300px 0px` }}>
            No news to display...
          </h1>
        </Wrapper>
      );
    }
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row>
              {(this.state.news || []).map((news, key) => (
                <Col
                  lg={4}
                  md={6}
                  xs={12}
                  key={key}
                  className="mb-4 pb-2 d-flex"
                >
                  <NewsFrontend key={news._id} {...news} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default New;
