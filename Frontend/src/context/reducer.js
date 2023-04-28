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

import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!',
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: 'User created! Redirecting...',
    };
  }
  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: 'Login Successful! Redirecting...',
    };
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSideBar: !state.showSideBar,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated!',
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === HANDLE_QUILL_CHANGE) {
    return {
      ...state,
      blogContent: action.payload.content,
    };
  }
  if (action.type === HANDLE_FILE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.file,
    };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editBlogId: '',
      blogTitle: '',
      blogImage: '',
      blogContent: '',
    };
    return {
      ...state,
      ...initialState,
    };
  }
  if (action.type === CREATE_BLOG_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_BLOG_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Blog Created!',
    };
  }
  if (action.type === CREATE_BLOG_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_BLOGS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_BLOGS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      blogsBackend: action.payload.blogsBackend,
      totalBlogs: action.payload.totalBlogs,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === SET_EDIT_BLOG) {
    // const blog = state.blogs.find((blog) => blog._id === action.payload.id);
    const blog = state.blogsBackend.find(
      (blog) => blog._id === action.payload.id,
    );
    const { _id, blogTitle, blogImage, blogContent } = blog;
    return {
      ...state,
      isEditing: true,
      editBlogId: _id,
      blogImage,
      blogTitle,
      blogContent,
    };
  }
  if (action.type === DELETE_BLOG_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_BLOG_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_BLOG_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Blog Updated!',
    };
  }
  if (action.type === EDIT_BLOG_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  if (action.type === CREATE_GALLERY_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_GALLERY_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Gallery Created!',
    };
  }
  if (action.type === CREATE_GALLERY_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
