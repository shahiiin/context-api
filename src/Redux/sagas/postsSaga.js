import { call, put, takeEvery } from "redux-saga/effects";
import { addPost } from "../../Services/addPost";
import { deletePost } from "../../Services/deletePost";
import { editPost } from "../../Services/editPost";
import { getPosts } from "../../Services/getPosts";
import {
  addPostFailure,
  addPostSuccess,
  deletePostFailure,
  deletePostSuccess,
  editPostFailure,
  editPostSuccess,
  fetchPostsFailure,
  fetchPostsSuccess,
} from "../modules/posts/postsActions";
import {
  ADD_POST_REQUEST,
  DELETE_POST_REQUEST,
  EDIT_POST_REQUEST,
  FETCH_POSTS_REQUEST,
} from "../modules/posts/postsTypes";

function* fetchPosts() {
  try {
    const { data } = yield call(() => getPosts());
    yield put(fetchPostsSuccess(data));
  } catch (e) {
    yield put(fetchPostsFailure(e.message));
  }
}

export function* fetchPostSaga() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}

function* removePost({ payload }) {
  try {
    yield call(() => deletePost(payload.id));
    yield put(deletePostSuccess(payload.id));
    payload.navigate("/", { replace: true });
  } catch (e) {
    yield put(deletePostFailure(e.message));
  }
}

export function* deletePostSaga() {
  yield takeEvery(DELETE_POST_REQUEST, removePost);
}

function* addNewPost({ payload }) {
  try {
    const { data } = yield call(() => addPost(payload.post));
    yield put(addPostSuccess(data));
    payload.navigate("/", { replace: true });
  } catch (e) {
    yield put(addPostFailure(e.message));
  }
}

export function* addPostSaga() {
  yield takeEvery(ADD_POST_REQUEST, addNewPost);
}

function* putPost({ payload }) {
  try {
    const { data } = yield call(() => editPost(payload.post.id, payload.post));
    yield put(editPostSuccess(data));
    payload.navigate("/", { replace: true });
  } catch (e) {
    yield put(editPostFailure(e.message));
  }
}

export function* editPostSaga() {
  yield takeEvery(EDIT_POST_REQUEST, putPost);
}
