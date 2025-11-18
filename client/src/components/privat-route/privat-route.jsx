import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { Spinner } from "../../components/spinner/spinner";

export const PrivateRoute = ({ children }) => {
  const { isAuth, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner />;
  }

  return isAuth ? <>{children}</> : <Navigate to="/login" replace />;
};
