import { Outlet } from "react-router-dom";
import "../styles/destination.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Main() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/login',{replace:true});
  }, [navigate]);
  return (
    <main>
<Outlet/>

    </main>
  );
}

export default Main;
