import React, { useEffect } from 'react';
import Wrapper from './Wrapper/BlogContainer';
import { useAppContext } from '../context/appContext';
import { Row, Col } from 'reactstrap';
import Loading from '../components/Loading';
import News from './News';
const NewsContainer = () => {
  const { getAllNews, newsBackend, totalNews, isLoading } = useAppContext();
  useEffect(() => {
    getAllNews();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  if (newsBackend.length === 0) {
    return (
      <Wrapper>
        <h1 className="text-center">No news to display...</h1>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5 className="text-capitalize mb-3">
        {totalNews} New{newsBackend.length > 1 && `s`} found{' '}
      </h5>
      <Row>
        {newsBackend.map((news, key) => (
          <Col lg={4} md={6} xs={12} key={key} className="mb-4 pb-2 d-flex">
            <News key={news._id} {...news} />
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};

export default NewsContainer;
