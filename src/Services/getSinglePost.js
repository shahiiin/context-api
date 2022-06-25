import { http } from "./httpServices";

export function getSinglePost(id) {
  return http.get(`/posts/${id}`);
}
