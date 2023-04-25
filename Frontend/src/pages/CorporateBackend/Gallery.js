import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input, Col, Row, Card, CardBody } from 'reactstrap';
import { useAppContext } from '../../context/appContext';
import GalleryPhoto from '../../components/GalleryPhoto';
import Alert from '../../components/Alert';

const Gallery = () => {
  const {
    showAlert,
    createGallery,
    galleryImage,
    displayAlert,
    handleFileChange,
  } = useAppContext();
  const handleChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    handleFileChange({ file, name });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!galleryImage) {
      displayAlert();
      return;
    }
    const currentFile = galleryImage;
    createGallery(currentFile);
  };
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data;',
      },
    };
    axios
      .get('http://localhost:5001/api/v1/gallery', config)
      .then((res) => {
        console.log(res.data);
        setGallery(res.data.gallery);
        console.log(res.data.gallery);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {showAlert && <Alert />}
        <Input
          className="mb-3"
          type="file"
          name="galleryImage"
          onChange={handleChange}
        />
        <Button className="w-100 btn-success" type="submit">
          Upload
        </Button>
      </form>
      <div>
        <Row>
          {gallery.length > 0 &&
            gallery.map((gallery, key) => (
              <Col
                lg={4}
                md={6}
                xs={12}
                key={key}
                className="mt-4 pt-2 picture-item d-flex"
              >
                <GalleryPhoto key={gallery._id} {...gallery} />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};
export default Gallery;
