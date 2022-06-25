import {
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
} from "./postsTypes";

const initialState = {
  loading: false,
  error: "",
  posts: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_POSTS_SUCCESS: {
      return {
        loading: false,
        error: "",
        posts: action.payload,
      };
    }
    case FETCH_POSTS_FAILURE: {
      return {
        loading: false,
        error: action.payload,
        posts: null,
      };
    }
    case DELETE_POST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case DELETE_POST_SUCCESS: {
      return {
        loading: false,
        error: "",
        posts: state.posts
          ? state.posts.filter((post) => post.id !== action.payload)
          : null,
      };
    }
    case DELETE_POST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case ADD_POST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_POST_SUCCESS: {
      return {
        loading: false,
        error: "",
        posts: [...(state.posts, []), action.payload],
      };
    }
    case ADD_POST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case EDIT_POST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case EDIT_POST_SUCCESS: {
      let updatedPosts = [...(state.posts, [])];
      let index = updatedPosts.findIndex(
        (post) => post.id === action.payload.id
      );
      let selectedPost = { ...updatedPosts[index] };
      selectedPost = action.payload;
      updatedPosts[index] = selectedPost;

      return {
        ...state,
        loading: false,
        error: "",
      };
    }

    case EDIT_POST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
