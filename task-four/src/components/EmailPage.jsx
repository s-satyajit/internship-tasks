import React from "react";
import { useForm } from "react-hook-form";

const EmailPage = ({ setIsLoggedIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    if (email === "satyajit@gmail.com" && password === "123456") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="h-screen bg-slate-900 flex justify-center items-center text-white">
      <form
        className="bg-slate-800 shadow-2xl p-10 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="my-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email here"
            className={`bg-slate-600 p-2 rounded-lg border ${
              errors.email ? "border-red-500" : "border-slate-500"
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="my-4">
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password here"
            className={`bg-slate-600 p-2 rounded-lg border ${
              errors.password ? "border-red-500" : "border-slate-500"
            }`}
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default EmailPage;
