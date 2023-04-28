import { useAppContext } from '../context/appContext';
import moment from 'moment';
import React from 'react';
import Wrapper from './Wrapper/Blog';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import BlogInfo from './BlogInfo';

const Blog = ({
  _id,
  blogTitle,
  createdAt,
  blogImage,
  createdBy,
  blogContent,
}) => {
  const { deleteBlog, setEditBlog } = useAppContext();
  let date = moment(createdAt);
  date = date.format('Do MMM YYYY, LTS');
  return (
    <Wrapper>
      <header>
        <Card className="border-0 blog shadow overflow-hidden">
          <img
            style={{ height: `400px`, objectFit: `scale-down` }}
            src={'http://localhost:5001/api/v1/blog/allblogs/' + blogImage}
            className="img-fluid"
            alt=""
          />
          <CardBody className="content">
            <ul className="list-unstyled d-flex justify-content-between">
              <p className="text-muted">{date}</p>
              <li className="text-muted">
                <Link to="#" className="badge bg-soft-primary">
                  AI
                </Link>
              </li>
            </ul>
            <h5>
              <Link to="#" className="card-title title text-dark w-50">
                {blogTitle}
              </Link>
            </h5>
            <div className="post-meta d-flex justify-content-between mt-3">
              <h6 className="text-capitalize text-muted">
                created by: {createdBy.name}
              </h6>
            </div>
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
          </CardBody>
        </Card>
      </header>
    </Wrapper>
  );
};

export default Blog;
