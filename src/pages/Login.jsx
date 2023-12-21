import Heading from "../components/Heading";
import Input from "../components/Input";
import Redirect from "../components/Redirect";
import Submit from "../components/Submit";
import "../styles/destination.css";
import weather from "../resources/images/2682849_cloud_cloudy_day_forecast_sun_icon.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { changeAuth } from "../feature/auth";

import { useFormik } from "formik";

import loginSchema from "../validations/loginSchema";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function onSubmit() {
    try {
      const register = await fetch(
        "https://new-weather-app-ehzj.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formik.values.email,
            password: formik.values.password,
          }),
        }
      );
      console.log("jons");
      const value = await register.json();
      if (value.success == true) {
        localStorage.setItem("data", `${value.data.token}`);
        localStorage.setItem("user", `${value.data.user}`);
        dispatch(changeAuth());
        toast.success("Login was successful", {
          autoClose: 2000,
        });
        console.log("before navigation to dashboard");
        return navigate("/dashboard");
        console.log("after navigation to dashboard");
      } else if (value.success == false) {
        toast.error("An error occurred while logging into your account");
      }
      console.log(value);
    } catch (e) {
      console.log(e);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <>
      <ToastContainer />
      <div className="onboarding-heading">
        <Heading
          heading="Welcome to WeatherInfo !"
          subtext="Sign in to your account"
        />
        <img src={weather} style={{ width: "50px", height: "50px" }} />
      </div>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Input
          type="email"
          label="Email"
          placeholder="john.doe@company.com"
          value={formik.values.email}
          id="email"
          name="email"
          change={formik.handleChange}
          blur={formik.handleBlur}
          error={formik.errors.email && formik.touched.email}
          errormsg={formik.errors.email}
        />
        <Input
          type="password"
          id="password"
          label="Password"
          placeholder="8+ Character"
          value={formik.values.password}
          name="password"
          change={formik.handleChange}
          blur={formik.handleBlur}
          error={formik.errors.password && formik.touched.password}
          errormsg={formik.errors.password}
        />
        <Submit text="Login" />
        <Redirect text="New here? Create an account" link="/registration" />
      </form>
    </>
  );
}
export default Login;
