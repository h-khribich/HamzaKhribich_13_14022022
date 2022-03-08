import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const userIsValid = useSelector((state) => state.login);
  return userIsValid ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
