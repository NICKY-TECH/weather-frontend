import { useEffect } from "react";
import { useNavigate, useLocation, Outlet,Navigate } from "react-router-dom";

const Auth = ({auth,children}) => {

  const navigate = useNavigate();
  const location = useLocation();

if(!auth){

  return <Navigate to="/"/>
}

return children
};


export default Auth;
