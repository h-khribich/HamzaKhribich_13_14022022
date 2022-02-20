import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn }) =>
  isLoggedIn ? <Outlet /> : <Navigate to="/" />;

export default ProtectedRoute;
