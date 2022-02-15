import * as Yup from "yup";

const loginFields = {
  email: Yup.string()
    .required("Email is required!")
    .matches(
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
      "Should be a valid email address"
    ),
  password: Yup.string()
    .required("Please enter your password!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
};

const signUpFields = {
  ...loginFields,
  name: Yup.string()
    .required("Please enter your name!")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
  lastName: Yup.string()
    .required("Please enter your last name!")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
  confirmEmail: Yup.string()
    .required()
    .oneOf([Yup.ref("email"), null], "Emails must match"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
};

export const loginSchema = Yup.object(loginFields);
export const signUpSchema = Yup.object(signUpFields);
