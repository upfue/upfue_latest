import React from 'react';
import { Label, Input } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';

const FormRow = ({ type, value, name, handleChange, labelText, icon }) => {
  return (
    <div className="mb-3">
      <Label className="form-label text-capitalize " htmlFor={name}>
        {labelText || name} <span className="text-danger">*</span>
      </Label>
      <div className="form-icon position-relative">
        <i>
          <FeatherIcon icon={icon} className="fea icon-sm icons" />
        </i>
      </div>
      <Input
        type={type}
        values={value}
        className="form-control ps-5"
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
