import { useAppContext } from '../context/appContext';
import moment from 'moment';
import React from 'react';
import Wrapper from './Wrapper/Blog';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import BlogInfo from './BlogInfo';

const BlogFrontend = ({
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
    <Wrapper className="d-flex">
      <Card className="border-0 blog shadow overflow-hidden ">
        <img
          src={'/api/v1/blog/allblogs/' + blogImage}
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
          <h5 className="card-title title text-dark">{blogTitle}</h5>
          <div className="post-meta d-flex justify-content-between mt-3">
            <Link to={`/blog-details/${_id}`}>Read More</Link>
            <h6 className="text-capitalize text-muted">
              created by: {createdBy.name}
            </h6>
          </div>
        </CardBody>
      </Card>
    </Wrapper>
  );
};

export default BlogFrontend;
