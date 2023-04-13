import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { Button, Form, Input, Label } from 'reactstrap';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
};
const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];
const Blog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');

  const CreatePost = (e) => {
    const data = new FormData();
    data.set('title', title);
    data.set('content', content);
    data.set('file', files[0]);
    e.preventDefault();
    console.log(files);
    fetch('http://localhost:5001/api/v1/blog', {
      method: 'POST',
      body: data,
    });
  };

  return (
    <div>
      <h1 className="text-capitalize text-center ">Create Blogs</h1>
      <Form onSubmit={CreatePost}>
        <Label className="form-label my-3 text-capitalize ">
          Title<span className="text-danger">*</span>
        </Label>
        <Input
          type="title"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label className="form-label text-capitalize my-3">
          Upload File<span className="text-danger">*</span>
        </Label>
        <Input
          type="file"
          // value={files}
          onChange={(e) => setFiles(e.target.files)}
          className="form-control mb-3"
        />
        <ReactQuill
          value={content}
          modules={modules}
          formats={formats}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" className="w-100 btn-primary mt-5 float-end">
          Create Blog
        </Button>
      </Form>
    </div>
  );
};

export default Blog;
