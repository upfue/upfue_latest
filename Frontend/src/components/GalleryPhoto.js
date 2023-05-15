import React, { useState } from 'react';
import { Button, Input, Col, Row, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useAppContext } from '../context/appContext';

const GalleryPhoto = ({ _id, GalleryImage, createdBy, createdAt }) => {
  const { deleteGallery } = useAppContext();
  let date = moment(createdAt);
  date = date.format('Do MMM YYYY, LTS');
  return (
    <div>
      <Card className="border-0 work-container work-grid position-relative d-flex overflow-hidden rounded">
        <CardBody className="p-0">
          <img
            height={400}
            style={{ objectFit: `scale-down`, width: `400px` }}
            src={GalleryImage}
            alt="work"
          />
          <div className="content bg-white p-3">
            <h6>Created: {date}</h6>
            <h6 className="text-muted tag mb-0">{createdBy.name}</h6>
            <div className="actions">
              <button
                type="button"
                className="btn btn-danger delete-btn text-capitalize"
                onClick={() => deleteGallery(_id)}
              >
                delete
              </button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default GalleryPhoto;
