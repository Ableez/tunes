/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import Important from "../pages/Important";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import star from "../Assets/star.svg";

const RightHome = () => {
  return (
    <div className="h-full p-2 ">
      <div className="flex flex-row dark:bg-dark-gray-06 bg-light-gray-06 rounded-xl h-full transition-all duration-200">
        <div className="flex w-fit px-4 duration-100 py-3 align-middle justify-start">
          <img
            className="mr-4 w-7 flex align-middle h-fit justify-center"
            src={star}
            alt=""
          />
          <span className="text-3xl dark:text-white text-dark-gray-06 font-semibold">
            Important
          </span>
        </div>
      </div>
    </div>
  );
};

export default RightHome;
