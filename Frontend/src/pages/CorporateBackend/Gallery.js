import React, { useState } from 'react';
import { Label, Input, Form, Button } from 'reactstrap';

const Gallery = () => {
  const [photos, setPhotos] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-center">Gallery</h1>
      <Form onSubmit={handleSubmit}>
        <Label className="form-label text-capitalize my-3">
          Upload File<span className="text-danger">*</span>
        </Label>
        <Input
          type="file"
          onChange={(e) => setPhotos(e.target.value)}
          className="form-control mb-3"
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-100 btn-primary mt-5 float-end"
        >
          Upload Images
        </Button>
      </Form>
    </div>
  );
};
export default Gallery;
