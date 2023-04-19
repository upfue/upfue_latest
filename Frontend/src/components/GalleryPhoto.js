import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const GalleryPhoto = ({ _id, GalleryImage }) => {
  return (
    <div>
      <img
        width={500}
        src={'http://localhost:5001/api/v1/gallery/' + GalleryImage}
        alt=""
      />
    </div>
  );
};

export default GalleryPhoto;
