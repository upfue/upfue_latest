import React from 'react';
import Wrapper from '../components/Wrapper/Bloginfo';

const BlogInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default BlogInfo;
