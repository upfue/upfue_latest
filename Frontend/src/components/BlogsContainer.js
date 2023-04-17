import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Blog from './Blog';
import Wrapper from './Wrapper/BlogContainer';
import React from 'react';

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
      <h5 className="text-capitalize">
        {totalBlogs} Blog{blogs.length > 1 && 's'} found{' '}
        <div className="blogs">
          {blogs.map((blog) => {
            return <Blog key={blog._id} {...blog} />;
          })}
        </div>
      </h5>
    </Wrapper>
  );
};

export default BlogsContainer;
