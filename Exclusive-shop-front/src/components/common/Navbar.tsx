import { NavLink } from "react-router";
import React, { useState } from "react";
import searchIcons from "../../assets/search-icon.svg";

const Navbar = () => {
  const items = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Contact",
      link: "/contact",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Sign Up",
      link: "/login",
    },
  ];

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-50 bg-black text-white text-xl font-semibold p-5">
        <div></div>
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          ShopNow
        </span>
        <select className="outline-none">
          <option>English</option>
          <option>French</option>
        </select>
      </div>
      <div className="flex flex-row items-center justify-between m-10">
        <h1 className="text-3xl font-bold">Exclusive</h1>
        <ul className="flex flex-row justify-center gap-5 text-xl">
          {items.map((items) => (
            <li key={items.link} className="hover:underline">
              <NavLink to={items.link}>{items.text}</NavLink>
            </li>
          ))}
        </ul>
        <div className="p-5 bg-gray-200 rounded-xl text-gray-800 flex flex-row items-center justify-center">
          <input
            type="search"
            placeholder="What are you looking for?"
            value={searchValue}
            onChange={handleChange}
            className="outline-none"
          />
          <button className="">
            <img alt="search-icons" src={searchIcons} />
          </button>
        </div>
      </div>
      <div className="border border-gray-200 w-full"></div>
    </>
  );
};

export default Navbar;
