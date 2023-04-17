import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Label } from 'reactstrap';

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
const BlogQuill = ({ type, value, name, handleChange, labelText }) => {
  return (
    <div>
      <Label className="form-label text-capitalize " htmlFor={name}>
        {labelText || name} <span className="text-danger">*</span>
      </Label>
      <ReactQuill
        type={type}
        formats={formats}
        modules={modules}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default BlogQuill;
