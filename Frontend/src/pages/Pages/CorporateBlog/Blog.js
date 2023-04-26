import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, CardBody } from 'reactstrap';
import Wrapper from '../../../components/Wrapper/BlogContainer';
import Loading from '../../../components/Loading';

//import images
import BlogFrontend from '../../../components/BlogFrontend';
import axios from 'axios';

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      isLoading: false,
      page: 1,
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5001/api/v1/blog/allblogs')
      .then((res) => {
        this.setState({ blogs: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    // const { isLoading, blogs, totalBlogs } = this.state;
    // if (isLoading) {
    //   return <Loading center />;
    // }

    // if (blogs.length === 0) {
    //   return (
    //     <Wrapper>
    //       <h1 className="text-center" style={{ margin: `300px 0px` }}>
    //         No blogs to display...
    //       </h1>
    //     </Wrapper>
    //   );
    // }
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <div>
              <Row>
                {(this.state.blogs || []).map((item, key) => (
                  <Col
                    lg={4}
                    md={6}
                    xs={12}
                    key={key}
                    className="mt-4 pt-2 picture-item"
                  >
                    <BlogFrontend key={item._id} {...item} />
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Blogs;
