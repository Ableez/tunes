import React from "react";
import day from "../Assets/day.svg";
import star from "../Assets/star.svg";
import tasks from "../Assets/tasks.svg";
import planned from "../Assets/planned.svg";
import assignedTask from "../Assets/assignedTask.svg";
import home from "../Assets/home.svg";
import { Link } from "react-router-dom";

const LeftHome = () => {
  return (
    <div className="h-full  transition-all duration-200">
      <div className="sidebar h-full border-r border-light-gray dark:border-dark-gray-03">
        <div className="list p-2">
          <ul>
            <Link>
              <li className="flex relative px-4 duration-100 mb-1 py-4 rounded-lg cursor-pointer hover:bg-neutral-800 text-sm align-middle justify-start w-full">
                <span className="listhero w-1 bg-blue absolute h-3  rounded-full top-1/2 -translate-y-1/2 left-0"></span>
                <img
                  className="mr-4 w-5 flex align-middle justify-center"
                  src={day}
                  alt=""
                />
                My day
              </li>
            </Link>
            <Link>
              <li className="flex relative px-4 duration-100 mb-1 py-4 rounded-lg cursor-pointer hover:bg-neutral-800 text-sm align-middle justify-start w-full">
                <span className="listhero w-1 bg-blue absolute h-3  rounded-full top-1/2 -translate-y-1/2 left-0"></span>
                <img
                  className="mr-4 w-5 flex align-middle justify-center"
                  src={star}
                  alt=""
                />
                Important
              </li>
            </Link>
            <Link>
              <li className="flex relative px-4 duration-100 mb-1 py-4 rounded-lg cursor-pointer hover:bg-neutral-800 text-sm align-middle justify-start w-full">
                <span className="listhero w-1 bg-blue absolute h-3  rounded-full top-1/2 -translate-y-1/2 left-0"></span>
                <img
                  className="mr-4 w-4 flex align-middle justify-center"
                  src={planned}
                  alt=""
                />
                Planned
              </li>
            </Link>
            <Link>
              <li className="flex relative px-4 duration-100 mb-1 py-4 rounded-lg cursor-pointer hover:bg-neutral-800 text-sm align-middle justify-start w-full">
                <span className="listhero w-1 bg-blue absolute h-3  rounded-full top-1/2 -translate-y-1/2 left-0"></span>
                <img
                  className="mr-4 w-4 flex align-middle justify-center"
                  src={assignedTask}
                  alt=""
                />
                Assigned to me
              </li>
            </Link>
            <Link>
              <li className="flex relative px-4 duration-100 mb-1 py-4 rounded-lg cursor-pointer hover:bg-neutral-800 text-sm align-middle justify-start w-full">
                <span className="listhero w-1 bg-blue absolute h-3  rounded-full top-1/2 -translate-y-1/2 left-0"></span>
                <img
                  className="mr-4 w-4 flex align-middle justify-center"
                  src={tasks}
                  alt=""
                />
                Tasks
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftHome;
