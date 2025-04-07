import React, { useState } from "react";
import background from "../assets/register-bg.svg";
import google from "../assets/google.svg";
import { NavLink } from "react-router";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-row mt-10 gap-20">
      <img alt="background" src={background} />
      <div className="flex flex-col gap-10 justify-center">
        <h1 className="font-light text-gray-800 text-6xl">Create an account</h1>
        <h2 className="text-2xl font-light">Enter your details below</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-b-2 border-gray-600 p-5 outline-none font-semibold text-gray-700"
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border-b-2 border-gray-600 p-5 outline-none font-semibold text-gray-700"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="border-b-2 border-gray-600 p-5 outline-none font-semibold text-gray-700"
          />
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="p-5 rounded-md bg-red-500 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-red-500 hover:border hover:border-red-500 active:bg-red-500"
            >
              Create Account
            </button>
            <button className="bg-white border border-gray-300 rounded-md p-5 flex items-center justify-center gap-2 font-semibold">
              <img alt="google-logo" src={google} />
              Continuer avec google
            </button>
            <p className="text-center">
              Already have an account ?{" "}
              <NavLink to="/login" className="cursor-pointer hover:underline">
                Log in
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
