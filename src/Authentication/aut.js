import { useEffect } from "react";
import { useNavigate, useLocation, Outlet,Navigate } from "react-router-dom";

const Auth = () => {
  const auth = localStorage.getItem('data')
  console.log('auth');
  console.log(auth)
  const navigate = useNavigate();
  const location = useLocation();
  
  // Render Outlet only if auth is not null
  useEffect(() => {
    if (auth === null) {
      // User is not authenticated, redirect to /login
      navigate("/login", { state: { from: location }, replace: true });
    }
  }, [auth]);

  // Return null to indicate that there's nothing to render here
  return <Outlet/>;
};


export default Auth;
