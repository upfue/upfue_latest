import { useAppContext } from '../context/appContext';
import moment from 'moment';
import React from 'react';
import Wrapper from './Wrapper/Blog';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Blog = ({ _id, title, createdAt, blogImage }) => {
  const { deleteBlog, setEditBlog } = useAppContext();
  let date = moment(createdAt);
  date = date.format('Do MMM YYYY');
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{title.charAt(0)}</div>
        <div className="info">
          <h5>{title}</h5>
          <p>{blogImage}</p>
        </div>
      </header>
      <div className="content">
        <footer>
          <div className="actions">
            <Link
              to="/dashboard/blogs"
              className="btn edit-btn text-capitalize"
              onClick={() => setEditBlog(_id)}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn text-capitalize"
              onClick={() => deleteBlog(_id)}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Blog;
