import { useSelector } from "react-redux";
export function usePosts() {
  return useSelector((state) => state.posts);
}
