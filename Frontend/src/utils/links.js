import React from 'react';
import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import {
  FaAddressBook,
  FaAudible,
  FaImage,
  FaJsSquare,
  FaWpforms,
} from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  {
    id: 1,
    text: 'stats',
    path: '/dashboard',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: 'Create Blogs',
    path: 'blogs',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: 'Create News',
    path: 'news',
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: 'Create Job Positions',
    path: 'job-position',
    icon: <FaJsSquare />,
  },
  {
    id: 5,
    text: 'Upload Gallery',
    path: 'gallery',
    icon: <FaImage />,
  },
  {
    id: 7,
    text: 'All Blogs',
    path: 'all-blogs',
    icon: <FaAddressBook />,
  },
  {
    id: 6,
    text: 'All News',
    path: 'all-news',
    icon: <FaAudible />,
  },

  {
    id: 8,
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
];

export default links;
