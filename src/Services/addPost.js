import { http } from "./httpServices";

export function addPost(post) {
  return http.post("/posts", post);
}
