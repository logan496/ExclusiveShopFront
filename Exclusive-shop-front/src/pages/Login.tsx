import background from "../assets/register-bg.svg";
import React, { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
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
        <h1 className="font-light text-gray-800 text-6xl">
          Log in to Exclusive
        </h1>
        <h2 className="text-2xl font-light">Enter your details below</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
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
        </form>
        <div className="flex flex-row justify-between items-center ">
          <button
            type="submit"
            className="p-5 rounded-md w-40 bg-red-500 text-white font-semibold transition-all duration-300 hover:bg-white hover:text-red-500 hover:border hover:border-red-500 active:bg-red-500"
          >
            Login
          </button>
          <span className="text-red-500 cursor-pointer hover:underline">
            Forget password ?
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
