import React, { useState } from 'react';
import { Button, Form, FormText, Input } from 'reactstrap';
import { useAppContext } from '../../context/appContext';
import Alert from '../../components/Alert';
import BlogFormRow from '../../components/BlogFormRow';
import BlogQuill from '../../components/BlogQuill';
import axios from 'axios';

const createBlog = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    blogTitle,
    blogImage,
    clearValues,
    handleFileChange,
    handleChange,
    createBlog,
    editBlog,
    blogContent,
  } = useAppContext();

  const handlefileChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    handleFileChange({ file, name });
  };
  const handletextChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ value, name });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!blogImage || !blogTitle || !blogContent) {
      displayAlert();
      return;
    }
    if (isEditing) {
      const currentBlog = { blogTitle, blogContent, blogImage };
      editBlog(currentBlog);
      return;
    }
    const currentBlog = { blogTitle, blogContent, blogImage };
    createBlog(currentBlog);
  };
  return (
    <div>
      <Form>
        <h3 className="text-center text-capitalize">
          {isEditing ? 'edit blog' : 'add blog'}
        </h3>
        {showAlert && <Alert />}
        <BlogFormRow
          type="text"
          labelText="blogTitle"
          name="blogTitle"
          value={blogTitle}
          handleChange={handletextChange}
        />
        <Input
          className="mb-3"
          type="file"
          name="blogImage"
          onChange={handlefileChange}
        />
        <BlogFormRow
          type="textarea"
          labelText="blogContent"
          name="blogContent"
          value={blogContent}
          handleChange={handletextChange}
        />
        <Button
          className="w-100 btn-warning"
          onClick={(e) => {
            e.preventDefault();
            clearValues();
          }}
        >
          Clear
        </Button>
        <Button className="w-100 mt-3" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default createBlog;
