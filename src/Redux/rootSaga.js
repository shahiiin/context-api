import { all } from "redux-saga/effects";
import {
  addPostSaga,
  deletePostSaga,
  editPostSaga,
  fetchPostSaga,
} from "./sagas/postsSaga";

export function* rootSaga() {
  yield all([fetchPostSaga(), deletePostSaga(), addPostSaga(), editPostSaga()]);
}
