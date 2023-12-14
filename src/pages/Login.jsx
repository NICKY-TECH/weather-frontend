import Heading from "../components/Heading";
import Input from "../components/Input";
import Redirect from "../components/Redirect";
import Submit from "../components/Submit";
import "../styles/destination.css";
import weather from "../resources/images/2682849_cloud_cloudy_day_forecast_sun_icon.png";
import { useFormik } from "formik/dist";
import loginSchema from "../validations/registration";

function Login() {
  function OnSubmit({ values, actions }) {
    setInterval(() => {
      actions.resetForm();
    }, 1000);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    OnSubmit,
  });
  console.log(formik);

  return (
    <>
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
        <Redirect text="New here? Create an account" />
      </form>
    </>
  );
}
export default Login;
