import React, { useState } from 'react';
import { Button, Form } from 'reactstrap';
import { useAppContext } from '../../context/appContext';
import Alert from '../../components/Alert';
import BlogFormRow from '../../components/BlogFormRow';
import axios from 'axios';

const addBlog = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    title,
    blogImage,
    handleChange,
    clearValues,
    createBlog,
    editBlog,
  } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !blogImage) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editBlog();
      return;
    }
    createBlog();
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ value, name });
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
          labelText="title"
          name="title"
          value={title}
          handleChange={handleJobInput}
        />
        <BlogFormRow
          type="text"
          labelText="blogImage"
          name="blogImage"
          value={blogImage}
          handleChange={handleJobInput}
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

export default addBlog;
