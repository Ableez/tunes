/* eslint-disable no-unused-vars */
import { React, useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TaskList from "./TaskList";
import day from "../Assets/day.svg";
import star from "../Assets/star.svg";
import tasks from "../Assets/tasks.svg";
import planned from "../Assets/planned.svg";
import assignedTask from "../Assets/assignedTask.svg";
import { AppContext } from "../App";
import TaskView from "../pages/TaskView";

const RightHome = () => {
  const [icons, setIcon] = useState({
    icon: "",
    list: "",
  });
  const { urlPath } = useContext(AppContext);
  useEffect(() => {
    if (urlPath === "day") {
      setIcon({
        icon: day,
        list: "My Day",
      });
    } else if (urlPath === "important") {
      setIcon({
        icon: star,
        list: "Important",
      });
    } else if (urlPath === "planned") {
      setIcon({
        icon: planned,
        list: "Planned",
      });
    } else if (urlPath === "assigned") {
      setIcon({
        icon: assignedTask,
        list: "Assigned To Me",
      });
    } else if (urlPath === "tasks") {
      setIcon({
        icon: tasks,
        list: "Tasks",
      });
    }
  }, [urlPath]);

  return (
    <div className="flex">
      <div
        className="overflow-y-scroll"
        style={{ height: "90vh", boxSizing: "border-box" }}
      >
        <div
          className="flex w-full border-b border-dark-gray-03 bg-dark-gray-06 px-4 duration-100 bg-opacity-70 sticky top-0 align-middle py-6 mb-2  justify-start"
          style={{ zIndex: "999", backdropFilter: "blur(10px)" }}
        >
          <img
            className="mr-4 w-7 flex align-middle h-fit justify-center"
            src={icons.icon}
            alt=""
          />
          <span className="text-2xl dark:text-white text-dark-gray-06 font-semibold">
            {icons.list}
          </span>
        </div>
        <div className="flex flex-row p-2 dark:bg-dark-gray-06 bg-light-gray-06 rounded-xl h-full transition-all duration-200">
          <TaskList />
        </div>
      </div>
      <TaskView />
    </div>
  );
};

export default RightHome;
