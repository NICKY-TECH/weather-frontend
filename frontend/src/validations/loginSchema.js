import * as yup from "yup";

const pattern =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,16}$/;
const regSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter, a valid email adddress")
    .required("The email field cannot be left empty"),
  password: yup
    .string()
    .min(8,  "Password must be atleast 8 characters long" )
    .matches(pattern, {
      message:
        "Your password must contain at least one digit, one lowercase letter, one uppercase letter, and one special character.",
    })
    .required("The password field cannot be empty"),
});

export default regSchema;
