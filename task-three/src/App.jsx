import React, { useState } from "react";

const App = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email, contact);
  };

  return (
    <>
      <div>
        <div>Fill up the form below</div>
        <div>
          <form>
            <label for="firstname">First Name: </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={firstname}
              placeholder="Enter your first name"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <label for="lastname">Last Name: </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={lastname}
              placeholder="Enter your last name"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
            <label for="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Enter your email id"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label for="contact">Contact:</label>
            <input
              type="text"
              name="contact"
              id="contact"
              value={contact}
              placeholder="Enter your contact"
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
            <button
              type="submit"
              value="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <p>First Name: {firstname}</p>
          <p>Last Name: {lastname}</p>
          <p>Email: {email}</p>
          <p>Contact: {contact}</p>
        </div>
      </div>
    </>
  );
};

export default App;
