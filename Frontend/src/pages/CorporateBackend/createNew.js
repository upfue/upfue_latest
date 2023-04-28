import React from 'react';
import ReactQuill from 'react-quill';
import { Button, Form, Input, Label } from 'reactstrap';
import 'react-quill/dist/quill.snow.css';

const createNew = () => {
  return (
    <div>
      <h1 className="text-capitalize text-center ">Create News</h1>
      <Form>
        <Label className="form-label my-3 text-capitalize ">
          Title<span className="text-danger">*</span>
        </Label>
        <Input type="title" className="form-control" placeholder="Title" />
        <Label className="form-label text-capitalize my-3">
          Upload File<span className="text-danger">*</span>
        </Label>
        <Input type="file" className="form-control mb-3" />
        <ReactQuill />
        <Button type="submit" className="btn-primary mt-3 float-end">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default createNew;
