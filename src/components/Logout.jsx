import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeAuth } from "../feature/auth";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function goTo() {
    localStorage.removeItem("data");
    localStorage.removeItem("user");
    dispatch(changeAuth());
    navigate("/login");
  }
  return <button onClick={goTo}>LOGOUT</button>;
}
export default Logout;
