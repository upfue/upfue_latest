import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Blog from './Blog';
import Wrapper from './Wrapper/BlogContainer';
import React from 'react';
import { Row, Col } from 'reactstrap';

const BlogsContainer = () => {
  const { getBlogs, blogs, isLoading, page, totalBlogs } = useAppContext();

  useEffect(() => {
    getBlogs();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  if (blogs.length === 0) {
    return (
      <Wrapper>
        <h1>No blogs to display...</h1>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5 className="text-capitalize mb-3">
        {totalBlogs} Blog{blogs.length > 1 && 's'} found{' '}
      </h5>
      <Row>
        {blogs.map((blog, key) => (
          <Col lg={4} md={6} xs={12} key={key} className="mb-4 pb-2 d-flex">
            <Blog key={blog._id} {...blog} />
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};

export default BlogsContainer;
