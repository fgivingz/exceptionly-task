import React from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import { loginSchema } from "../helpers";

export const LoginForm = () => {
  return (
    <>
      <Formik
        validationSchema={loginSchema}
        initialValues={{
          email: "",
          password: ""
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors
        }) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              label="Email"
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              variant="standard"
              helperText={errors.email}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              variant="standard"
              helperText={errors.password}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
              <div style={{ display: 'flex' }}>
                <Checkbox />
                <p>Remember Me</p>
              </div>
              <p style={{ color: '#4285f4', cursor: 'pointer' }}>Forgot Password?</p>
            </div>
            <Button type="submit">Sign In</Button>
          </div>
        )}
      </Formik>
    </>
  );
};
