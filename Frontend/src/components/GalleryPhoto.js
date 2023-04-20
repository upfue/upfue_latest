import React, { useState } from 'react';
import { Button, Input, Col, Row, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
const GalleryPhoto = ({ _id, GalleryImage }) => {
  const [open, setOpen] = useState(false);
  const [photoIdx, setPhotoIdx] = useState(0);
  return (
    <div>
      <Card className="border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
        <CardBody className="p-0">
          <Link
            className="mfp-image d-inline-block"
            to="#"
            onClick={(event) => {
              event.preventDefault();
              setOpen(true);
              console.log(open);
            }}
          >
            <img
              height={400}
              style={{ objectFit: `scale-down`, width: `100%` }}
              src={'http://localhost:5001/api/v1/gallery/' + GalleryImage}
              alt="work"
            />
          </Link>
          <div className="content bg-white p-3">
            <h5 className="mb-0">
              <Link to="page-work-detail" className="text-dark title">
                asdasd
              </Link>
            </h5>
            <h6 className="text-muted tag mb-0">{_id}</h6>
          </div>
        </CardBody>
      </Card>
      {open && <Lightbox />}
    </div>
  );
};

export default GalleryPhoto;
