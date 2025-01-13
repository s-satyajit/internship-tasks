import React, { useState } from "react";

const App = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(firstname, lastname, email, contact);

  return (
    <>
      <div className="content-center h-screen bg-slate-900 p-20 grid grid-cols-2">
        <div className="text-slate-200 p-10 md:[]" id="div1">
          <div className="text-3xl text-center py-10">
            Fill up the form below
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label for="firstname" className="text-xl ">First Name: </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={firstname}
                placeholder="Enter your first name"
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                className="block w-full p-2 border rounded-lg bg-slate-700 text-white border-slate-400 hover:bg-slate-800 my-2"
              />
              <label for="lastname" className="text-xl">Last Name: </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={lastname}
                placeholder="Enter your last name"
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                className="block w-full p-2 border border-slate-400 rounded-lg bg-slate-700 hover:bg-slate-800 text-white my-2"
              />
              <label for="email" className="text-xl">Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Enter your email id"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="block w-full my-2 p-2 rounded-lg bg-slate-700 hover:bg-slate-800 text-white border border-slate-400"
              />
              <label for="contact" className="text-xl ">Contact:</label>
              <input
                type="text"
                name="contact"
                id="contact"
                value={contact}
                placeholder="Enter your contact"
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                className="block w-full my-2 p-2 border border-slate-400 rounded-lg text-white bg-slate-700 hover:bg-slate-800"
              />
              <button
                type="submit"
                value="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="block bg-blue-700 p-2 my-5 border border-slate-400 rounded-md w-24"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="text-slate-200 p-10" id="div2">
          <div className="text-3xl text-center py-10">Filled Form</div>
          <p className="text-xl mt-12">First Name: {firstname}</p>
          <p className="text-xl mt-14">Last Name: {lastname}</p>
          <p className="text-xl mt-14">Email: {email}</p>
          <p className="text-xl mt-14">Contact: {contact}</p>
        </div>
      </div>
    </>
  );
};

export default App;
