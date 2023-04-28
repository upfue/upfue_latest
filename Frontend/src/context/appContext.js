import React, { useReducer, useContext, useState } from 'react';
import reducer from './reducer';
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_BLOG_BEGIN,
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_ERROR,
  GET_BLOGS_BEGIN,
  GET_BLOGS_SUCCESS,
  SET_EDIT_BLOG,
  DELETE_BLOG_BEGIN,
  EDIT_BLOG_BEGIN,
  EDIT_BLOG_SUCCESS,
  EDIT_BLOG_ERROR,
  CREATE_GALLERY_BEGIN,
  CREATE_GALLERY_SUCCESS,
  CREATE_GALLERY_ERROR,
  HANDLE_FILE_CHANGE,
  HANDLE_QUILL_CHANGE,
} from './actions';
import axios from 'axios';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  showSideBar: false,
  isEditing: false,
  editBlogId: '',
  blogTitle: '',
  blogImage: '',
  blogContent: '',
  blogs: [],
  blogsBackend: [],
  totalBlogs: 0,
  numOfPages: 1,
  page: 1,
  galleryImage: '',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: 'http://localhost:5001/api/v1',
  });

  authFetch.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${state.token}`;
      config.headers['Content-Type'] = 'application/json';
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 500) {
        logoutUser();
      }
      return Promise.reject(error);
    },
  );

  const fileFetch = axios.create({
    baseURL: 'http://localhost:5001/api/v1',
  });
  fileFetch.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${state.token}`;
      config.headers['Content-Type'] = 'multipart/form-data;';
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  fileFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 500) {
        logoutUser();
      }
      return Promise.reject(error);
    },
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
  };
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await authFetch.post(`/auth/register`, currentUser);
      console.log(response);
      const { user, token } = response.data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, token } });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await authFetch.post('/auth/login', currentUser);
      const { user, token } = data;
      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token } });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const toggleSideBar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };
  const updateUser = async (currentUser) => {
    try {
      dispatch({ type: UPDATE_USER_BEGIN });
      const { data } = await authFetch.patch('/auth/updateuser', currentUser);
      const { user, token } = data;
      dispatch({ type: UPDATE_USER_SUCCESS, payload: { user, token } });
      addUserToLocalStorage({ user, token });
      console.log(data);
    } catch (error) {
      if (error.response.status !== 500) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };
  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };
  const handleFileChange = ({ name, file, value }) => {
    dispatch({ type: HANDLE_FILE_CHANGE, payload: { name, file, value } });
  };
  const handleQuillChange = ({ content }) => {
    dispatch({ type: HANDLE_QUILL_CHANGE, payload: { content } });
  };
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createBlog = async (currentBlog) => {
    dispatch({ type: CREATE_BLOG_BEGIN });
    try {
      const data = new FormData();
      data.set('blogTitle', currentBlog.blogTitle);
      data.set('blogContent', currentBlog.blogContent);
      data.set('file', currentBlog.blogImage);
      await fileFetch.post('/blog', data);
      dispatch({
        type: CREATE_BLOG_SUCCESS,
      });
      clearValues();
    } catch (error) {
      console.log(error);
    }
    clearAlert();
  };

  const getAllBlogs = async () => {
    let url = '/blog';

    dispatch({ type: GET_BLOGS_BEGIN });
    try {
      const { data } = await fileFetch(url);
      const { blogsBackend, totalBlogs, numOfPages } = data;
      dispatch({
        type: GET_BLOGS_SUCCESS,
        payload: {
          blogsBackend,
          totalBlogs,
          numOfPages,
        },
      });
    } catch (error) {
      console.log(error.response);
      logoutUser();
    }
    clearAlert();
  };
  const getBlogs = async () => {
    let url = '/blog/allblogs';

    dispatch({ type: GET_BLOGS_BEGIN });
    try {
      const { data } = await fileFetch(url);
      const { blogs, totalBlogs, numOfPages } = data;
      dispatch({
        type: GET_BLOGS_SUCCESS,
        payload: {
          blogs,
          totalBlogs,
          numOfPages,
        },
      });
    } catch (error) {
      console.log(error.response);
      logoutUser();
    }
    clearAlert();
  };

  const setEditBlog = async (id) => {
    dispatch({ type: SET_EDIT_BLOG, payload: { id } });
  };
  const editBlog = async (currentBlog) => {
    console.log(currentBlog);
    dispatch({ type: EDIT_BLOG_BEGIN });
    try {
      const data = new FormData();
      data.set('blogTitle', currentBlog.blogTitle);
      data.set('blogContent', currentBlog.blogContent);
      data.set('file', currentBlog.blogImage);

      await fileFetch.patch(`/blog/${state.editBlogId}`, data);
      dispatch({
        type: EDIT_BLOG_SUCCESS,
      });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_BLOG_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  const deleteBlog = async (blogId) => {
    dispatch({ type: DELETE_BLOG_BEGIN });
    try {
      await fileFetch.delete(`/blog/${blogId}`);
      getAllBlogs();
    } catch (error) {
      logoutUser();
    }
  };
  const createGallery = async (currentFile) => {
    dispatch({ type: CREATE_GALLERY_BEGIN });
    try {
      const formData = new FormData();
      formData.set('file', currentFile);
      const data = await fileFetch.post('/gallery', formData);
      const gallery = data;
      dispatch({
        type: CREATE_GALLERY_SUCCESS,
        payload: { gallery },
      });
    } catch (error) {
      if (error.response.status === 400) return;
      dispatch({
        type: CREATE_GALLERY_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleSideBar,
        logoutUser,
        updateUser,
        handleChange,
        clearValues,
        createBlog,
        getBlogs,
        setEditBlog,
        deleteBlog,
        getAllBlogs,
        editBlog,
        createGallery,
        handleFileChange,
        handleQuillChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
