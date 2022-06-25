import { Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UploadPage from "./Pages/UploadPage";

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/upload-:id", element: <UploadPage /> },
  { path: "*", element: <Navigate to="/" /> },
];
