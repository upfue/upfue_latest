import React from 'react';
import { Input, Label } from 'reactstrap';
const BlogFormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className="mb-3">
      <Label htmlFor={name} className="form-label text-capitalize">
        {labelText || name}
        <span className="text-danger">*</span>
      </Label>
      <Input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
};

export default BlogFormRow;
