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
    <div className="bg-slate-900 h-screen flex justify-center items-center">
      <div className="bg-slate-800 p-10 rounded-lg shadow-lg">
        <form className="text-white text-3xl font-bold" onSubmit={handleSubmit(onSubmit)} >
          <div className="">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email here"
              className="bg-slate-600 rounded-lg p-2 my-5 border border-slate-400"
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
              className="bg-slate-600 p-2 my-5 rounded-lg border border-slate-400"
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
          <div className="flex justify-center">
          <button className="m-5 bg-gray-900 p-4 rounded-lg" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;