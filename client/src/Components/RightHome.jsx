/* eslint-disable no-unused-vars */
import { React, useContext, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TaskList from "./TaskList";
import day from "../Assets/day.svg";
import star from "../Assets/star.svg";
import tasks from "../Assets/tasks.svg";
import planned from "../Assets/planned.svg";
import assignedTask from "../Assets/assignedTask.svg";
import { AppContext } from "../App";

const RightHome = () => {
  const { urlPath } = useContext(AppContext);
console.log(urlPath)
  const content = () => {
    if (urlPath === "day") {
      return <TaskList icon={day} list={"My Day"} />;
    } else if (urlPath === "important") {
      return <TaskList icon={star} list={"Important"} />;
    } else if (urlPath === "planned") {
      return <TaskList icon={planned} list={"Planned"} />;
    } else if (urlPath === "assigned") {
      return <TaskList icon={assignedTask} list={"Assigned To Me"} />;
    } else if (urlPath === "tasks") {
      return <TaskList icon={tasks} list={"Tasks"} />;
    }
  };

  return (
    <div className="h-full p-2 ">
      <div className="flex flex-row dark:bg-dark-gray-06 bg-light-gray-06 rounded-xl h-full transition-all duration-200">
        {content()}
      </div>
    </div>
  );
};

export default RightHome;
