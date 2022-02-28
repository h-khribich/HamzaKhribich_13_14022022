import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const userIsValid = useSelector((state) => state.auth === true);
  return userIsValid ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
