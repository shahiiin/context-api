import { http } from "./httpServices";

export function deletePost(postId) {
  return http.delete(`/posts/${postId}`);
}
