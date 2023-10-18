import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from "prop-types";
import {
  Navigate,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const { user, loading } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={pathname} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
