import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email here"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is not valid"
                }
              })}
              />
              {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password here"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password should be atleast 6 characters"
                }
              })}
            /> 
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default App;