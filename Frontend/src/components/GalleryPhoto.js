import React, { useState } from 'react';
import { Button, Input, Col, Row, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import moment from 'moment';
const GalleryPhoto = ({ _id, GalleryImage, createdBy, createdAt }) => {
  const [open, setOpen] = useState(false);
  let date = moment(createdAt);
  date = date.format('Do MMM YYYY, LTS');
  return (
    <div>
      <Card className="border-0 work-container work-grid position-relative d-flex overflow-hidden rounded">
        <CardBody className="p-0">
          <Link
            className="mfp-image d-inline-"
            to="#"
            onClick={(event) => {
              event.preventDefault();
              setOpen(true);
            }}
          >
            <img
              height={400}
              style={{ objectFit: `scale-down`, width: `400px` }}
              src={'http://localhost:5001/api/v1/gallery/' + GalleryImage}
              alt="work"
            />
          </Link>
          <div className="content bg-white p-3">
            <h6>Created: {date}</h6>
            <h6 className="text-muted tag mb-0">{createdBy.name}</h6>
          </div>
        </CardBody>
      </Card>
      {open && <Lightbox />}
    </div>
  );
};

export default GalleryPhoto;
