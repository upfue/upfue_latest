import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Nav } from 'reactstrap';
import Wrapper from '../../components/Wrapper/SharedLayout';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Nav>
        <Link >stats</Link>
        <Link to="blogs">Blogs</Link>
        <Link to="news">News</Link>
      </Nav>
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
