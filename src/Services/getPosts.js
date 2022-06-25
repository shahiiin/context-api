import { http } from "./httpServices";

export function getPosts() {
  return http.get("/posts");
}
