import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onHandleChange = (e) => {
    const {name, value} = e.target
    setState((prevProps) => ({
      ...prevProps,
      [value]: name
    }))
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(state)
  }

  return (
    <>
      <div>
        <form onSubmit={onHandleSubmit}>
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={state.email}
              placeholder="Enter your email here"
              onChange={onHandleChange}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={state.password}
              placeholder="Enter your password here"
              onChange={onHandleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
