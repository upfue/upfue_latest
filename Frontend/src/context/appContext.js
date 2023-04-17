import React, { useReducer, useContext } from 'react';
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
  title: '',
  blogImage: '',
  blogs: [],
  totalBlogs: 0,
  numOfPages: 1,
  page: 1,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: '/api/v1',
  });

  authFetch.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${state.token}`;
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
    console.log(currentUser);
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post(`api/v1/auth/register`, currentUser);
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
    console.log(currentUser);
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post(`api/v1/auth/login`, currentUser);
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
  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createBlog = async () => {
    dispatch({ type: CREATE_BLOG_BEGIN });
    try {
      const { title, blogImage } = state;
      await authFetch.post('/blog', {
        title,
        blogImage,
      });
      dispatch({
        type: CREATE_BLOG_SUCCESS,
      });
      dispatch({
        type: CLEAR_VALUES,
      });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_BLOG_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getBlogs = async () => {
    let url = `/blog`;

    dispatch({ type: GET_BLOGS_BEGIN });
    try {
      const { data } = await authFetch(url);
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

  const setEditBlog = (id) => {
    console.log(`set edit job ${id}`);
  };
  const deleteBlog = (id) => {
    console.log(`set edit job ${id}`);
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
