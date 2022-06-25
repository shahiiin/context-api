import { http } from "./httpServices";

export function editPost(postId, post) {
  return http.put(`/posts/${postId}`, post);
}
