import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Input, Col } from 'reactstrap';
import GalleryPhoto from '../../components/GalleryPhoto';

const Gallery = () => {
  const [file, setFile] = useState('');
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.set('file', file);
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data;',
      },
      body: formData,
    };
    try {
      await axios.post(
        'http://localhost:5001/api/v1/gallery',
        formData,
        config,
      );
      console.log(file);
    } catch (error) {
      console.error(error);
    }
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
        <Input className="mb-3" type="file" onChange={handleFileChange} />
        <Button className="w-100 btn-success" type="submit">
          Upload
        </Button>
      </form>
      <div>
        {gallery.length > 0 &&
          gallery.map((gallery, key) => (
            <Col lg={4} md={6} xs={12} key={key} className="mb-4 pb-2 d-flex">
              <GalleryPhoto key={gallery._id} {...gallery} />
            </Col>
          ))}
      </div>
    </div>
  );
};
export default Gallery;
