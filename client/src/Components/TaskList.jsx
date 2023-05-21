/* eslint-disable react/prop-types */
import { useState } from "react";
import chevron from "../Assets/chevron-right.svg";
import "flowbite";
import taskmenu from "../Assets/taskmenu.svg";

const TaskList = ({ list, icon }) => {
  const [rotateChevron, setRotateChevron] = useState(false);
  return (
    <div className="taskList w-full">
      <div className="flex w-fit px-4 duration-100 py-3 align-middle justify-start">
        <img
          className="mr-4 w-7 flex align-middle h-fit justify-center"
          src={icon}
          alt=""
        />
        <span className="text-2xl dark:text-white text-dark-gray-06 font-semibold">
          {list}
        </span>
      </div>
      <div className="sort w-full mb-8 px-4">
        <button
          className="py-2 px-4 border border-dark-gray-03 hover:border-dark-gray-04 bg-light-gray-03 dark:bg-dark-gray-05 dark:hover:bg-dark-gray-06 duration-300  rounded-lg w-fit gap-2 grid grid-flow-col place-items-center justify-items-center"
          style={{ transition: "background 0.3s ease-in-out" }}
          onClick={() => {
            console.log("Sort Clicked");
            setRotateChevron((prev) => !prev);
          }}
        >
          <img
            className={` w-4 place transition-all duration-100 ${
              rotateChevron ? "" : "-rotate-90"
            } justify-center`}
            src={chevron}
            alt=""
          />
          <span>Earlier</span>
        </button>
      </div>
      <div className="tasks px-4 mt-2">
        <label
          htmlFor="default-checkbox"
          className="task dark:bg-neutral-800 bg-light-gray-03  p-4 py-4 cursor-pointer hover:bg-dark-gray-05 duration-200 hover:border-dark-gray-04 border mb-1 border-neutral-800 transition-colors rounded-lg flex  align-middle justify-between"
        >
          <div className="grid grid-flow-col gap-3">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-5 h-5 text-blue-600 focus:ring-0 cursor-pointer bg-light-gray border-gray-300 rounded  dark:bg-dark-gray-04  dark:border-gray-600"
            />
            <h4 className="taskTitle">Task title goes here🎉</h4>
          </div>
          <button className="taskmenu hover:bg-dark-gray-04 rounded-full p-2 duration-200 grid place-items-center">
            <img src={taskmenu} className="w-5" alt="" />
          </button>
        </label>
      </div>
    </div>
  );
};

export default TaskList;
