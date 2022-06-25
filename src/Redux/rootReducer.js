import { combineReducers } from "redux";
import { postsReducer } from "./modules/posts/postsReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
});
