import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  if (!isUser) {
    return (<Navigate to="/login" />
    );
  }
  return children;
};
export default PrivateRoute;
// import { useNavigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//    const navigate = useNavigate();
//    const isAuth = true;
//    if (isAuth) {
//      return children;
//    } else {
//      navigate("/signin");
//      return null;
//    }
// };
// export default PrivateRoute;