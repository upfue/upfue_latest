import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { Button, Form, Input, Label } from 'reactstrap';
import 'react-quill/dist/quill.snow.css';
import { useAppContext } from '../../context/appContext';
import Alert from '../../components/Alert';

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
  const { displayAlert, isEditing, showAlert } = useAppContext();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (!title || !content || !files) {
      displayAlert();
      return;
    }
    console.log('create job');
  };
  // const CreatePost = async (e) => {
  //   const data = new FormData();
  //   data.set('title', title);
  //   data.set('content', content);
  //   data.set('file', files[0]);
  //   e.preventDefault();
  //   console.log(files);
  //   const response = await fetch('http://localhost:5001/api/v1/blog', {
  //     method: 'POST',
  //     mode: 'cors',
  //     body: data,
  //   });
  // };

  return (
    <div>
      <h1 className="text-capitalize text-center ">
        {isEditing ? 'Create Blogs' : 'Edit Blog'}
      </h1>
      {showAlert && <Alert />}
      <Form onSubmit={handleSubmit}>
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
          onChange={(e) => {
            content = e.target.value;
          }}
        />
        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-100 btn-primary mt-5 float-end"
        >
          Create Blog
        </Button>
      </Form>
    </div>
  );
};

export default Blog;
