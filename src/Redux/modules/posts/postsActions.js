import {
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  EDIT_POST_FAILURE,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./postsTypes";

export function fetchPostsRequest() {
  return { type: FETCH_POSTS_REQUEST };
}

export function fetchPostsSuccess(posts) {
  return { type: FETCH_POSTS_SUCCESS, payload: posts };
}

export function fetchPostsFailure(error) {
  return { type: FETCH_POSTS_FAILURE, payload: error };
}

export function deletePostRequest({ id, navigate }) {
  return { type: DELETE_POST_REQUEST, payload: { id, navigate } };
}

export function deletePostSuccess(id) {
  return { type: DELETE_POST_SUCCESS, payload: id };
}

export function deletePostFailure(error) {
  return { type: DELETE_POST_FAILURE, payload: error };
}

export function addPostRequest({ post, navigate }) {
  return { type: ADD_POST_REQUEST, payload: { post, navigate } };
}

export function addPostSuccess(post) {
  return { type: ADD_POST_SUCCESS, payload: post };
}

export function addPostFailure(error) {
  return { type: ADD_POST_FAILURE, payload: error };
}

export function editPostRequest({ post, navigate }) {
  return { type: EDIT_POST_REQUEST, payload: { post, navigate } };
}

export function editPostSuccess(post) {
  return { type: EDIT_POST_SUCCESS, payload: post };
}

export function editPostFailure(error) {
  return { type: EDIT_POST_FAILURE, payload: error };
}
