import Heading from "../components/Heading";
import Input from "../components/Input";
import Redirect from "../components/Redirect";
import Submit from "../components/Submit";
import "../styles/destination.css";
import weather from "../resources/images/2682849_cloud_cloudy_day_forecast_sun_icon.png";
import { useFormik } from "formik/dist";
import { useNavigate } from "react-router-dom";
import regSchema from "../validations/registration";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Registration() {
  const navigate = useNavigate();
  async function submit() {
    try {
      const register = await fetch(
        "https://new-weather-app-ehzj.onrender.com/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formik.values.email,
            password: formik.values.password,
            name: formik.values.name,
            confirmpassword: formik.values.confirmpassword,
          }),
        }
      );
      console.log("jons");
      const value = await register.json();
      if (value.success == true) {
        toast.success("Account registration was successful",{
          autoClose:5000
        });
       setTimeout(()=>{
        navigate("/login");
       },5000)
      } else if (value.success == false) {
        toast.error("An error occurred while creating your account");
      }
      console.log(value);
    } catch (e) {
      console.log(e);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: regSchema,
    onSubmit: submit,
  });
  console.log(formik);

  return (
    <>
    <ToastContainer/>
      <div className="onboarding-heading">
        <Heading
          heading="Welcome to WeatherInfo !"
          subtext="Register your account"
        />
        <img src={weather} style={{ width: "50px", height: "50px" }} />
      </div>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          label="Name"
          placeholder="John"
          value={formik.values.name}
          name="name"
          id="name"
          change={formik.handleChange}
          blur={formik.handleBlur}
          error={formik.errors.name && formik.touched.name}
          errormsg={formik.errors.name}
        />
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
        <Input
          type="password"
          id="confirmpassword"
          label="Confirm Password"
          placeholder="8+ Character"
          value={formik.values.confirmpassword}
          name="confirmpassword"
          change={formik.handleChange}
          blur={formik.handleBlur}
          error={
            formik.errors.confirmpassword && formik.touched.confirmpassword
          }
          errormsg={formik.errors.confirmpassword}
        />
        <Submit text="Create account" />
        <Redirect text="Already have an account? Signin" link="login"/>
      </form>
    </>
  );
}

export default Registration;
