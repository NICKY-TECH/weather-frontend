import { useEffect } from "react";
import { useNavigate, useLocation, Outlet,Navigate } from "react-router-dom";

const Auth = ({auth,children}) => {
  console.log('auth');
  console.log(auth)
  const navigate = useNavigate();
  const location = useLocation();
  console.log('authenticate component')
  console.log(auth)
  
if(!auth){
  console.log('does not contain auth')
  console.log(auth)
  return <Navigate to="/login"/>
}
console.log('passed')
return children
};


export default Auth;
