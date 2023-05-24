/* eslint-disable no-unused-vars */
import React from "react";
import star from "../Assets/star.svg";
import logo from "/vite.svg";
import bell from "../Assets/notification.svg";

const Navbar = () => {
  return (
    <header className="flex align-middle justify-between border-b dark:bg-dark-gray-06 bg-light-gray-06  border-light-gray-03 dark:border-dark-gray-03 " style={{height: "10vh"}}>
      <nav className="md:w-1/5 border-r border-dark-gray-03 flex pl-6 py-2 align-middle justify-start hover:bg-light-gray-03 dark:hover:bg-neutral-900 cursor-pointer select-none transition-all duration-200">
        <img src={logo} alt="" className="w-5 h-full mr-4" />
        <div className="username  h-fit place-self-center">
          <h4 className="font-bold text-md " style={{ lineHeight: "1" }}>
            Task Manager
          </h4>
        </div>
      </nav>
      <div className="flex pr-6 py-2 place-self-center justify-self-end ">
        <div className="notifications h-fit relative hover:bg-light-gray-03 dark:hover:bg-dark-gray-03 hover:scale-110 duration-300 cursor-pointer p-0.5 rounded-full place-self-center mr-2  grid place-items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="bg-red p-1 rounded-full absolute -top-1 -right-0.5"></span>
        </div>
        <a
          href="#"
          className="p-1 hover:scale-110 bg-neutral-400 duration-150  bg-opacity-20 rounded-full"
        >
          <img
            className="w-10 rounded-full duration-200  h-10 object-cover"
            src="https://media.istockphoto.com/id/1272410886/photo/african-american-man-with-afro-hair-wearing-hoodie-and-standing-over-isolated-yellow.jpg?s=612x612&w=0&k=20&c=Voc5YeDmCiUY-IeS93Xz5GqDT8JynkMR27MOToxAxdU="
            alt=""
          />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
