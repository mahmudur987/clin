import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");

  return accessToken ? <Navigate to="/dashboard" replace /> : children;
};

export default PublicRoute;
