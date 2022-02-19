import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isLogged }) =>
  isLogged ? <Outlet /> : <Navigate to="/" />;

export default ProtectedRoute;
