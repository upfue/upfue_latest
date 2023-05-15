import React, { useState } from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAppContext } from '../../context/appContext';
import Alert from '../../components/Alert';
const createNew = () => {
  const [newsContent, setNewsContent] = useState('');
  const [newsTitle, setNewsTitle] = useState('');
  const [newsImage, setNewsImage] = useState('');
  const {
    displayAlert,
    showAlert,
    createNews,
    isEditing,
    editNews,
    clearValues,
  } = useAppContext();
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
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newsTitle || !newsContent || !newsImage) {
      displayAlert();
    }
    if (isEditing) {
      const currentNews = { newsTitle, newsContent, newsImage };
      editNews(currentNews);
      return;
    }
    const currentNews = { newsTitle, newsContent, newsImage };
    createNews(currentNews);
  };

  return (
    <div>
      <h1 className="text-center text-capitalize">
        {isEditing ? 'edit News' : 'create News'}
      </h1>
      <Form>
        {showAlert && <Alert />}
        <Label className="form-label my-3 text-capitalize ">
          Title<span className="text-danger">*</span>
        </Label>
        <Input
          type="text"
          className="form-control"
          value={newsTitle}
          onChange={(e) => setNewsTitle(e.target.value)}
        />
        <Label className="form-label text-capitalize my-3">
          Upload File<span className="text-danger">*</span>
        </Label>
        <Input
          type="file"
          className="form-control mb-3"
          onChange={(e) => setNewsImage(e.target.files[0])}
        />
        <ReactQuill
          value={newsContent}
          modules={modules}
          onChange={setNewsContent}
        />
        <Button
          className="mt-5 w-100 btn-warning"
          onClick={(e) => {
            e.preventDefault();
            clearValues();
          }}
        >
          Clear
        </Button>
        <Button
          type="submit"
          className="btn-success w-100 mt-3 float-end"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default createNew;
