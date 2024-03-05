import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const LoginFormYup = () => {
  // Yup schema for validation
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  // React Hook Form setup
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Function to handle form submission
  const onSubmit = (data) => {
    // Perform actions with validated data
    console.log("Submitted data:", data);
    reset();
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username:
          <input type="text" {...register("username")} />
          <p>{errors.username?.message}</p>
        </label>
        <br />
        <label>
          Password:
          <input type="password" {...register("password")} />
          <p>{errors.password?.message}</p>
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginFormYup;
