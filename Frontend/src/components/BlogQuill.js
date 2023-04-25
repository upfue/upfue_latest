import ReactQuill from 'react-quill';
import React from 'react';

const BlogQuill = ({ value, onChange, name }) => {
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
  return (
    <ReactQuill
      value={value}
      theme={'snow'}
      name={name}
      onChange={onChange}
      modules={modules}
    />
  );
};
export default BlogQuill;
