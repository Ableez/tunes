/* eslint-disable react/prop-types */
import day from "../Assets/day.svg";
import star from "../Assets/star.svg";
import tasks from "../Assets/tasks.svg";
import planned from "../Assets/planned.svg";
import assignedTask from "../Assets/assignedTask.svg";
import { AppContext } from "../App";
import { useContext } from "react";
import sidebarMenu from "../Assets/sidebarMenu.svg";

const LeftHome = ({ menuOpen, setOpenMenu }) => {
  const { setUrlPath } = useContext(AppContext);

  return (
    <div className="h-full transition-all duration-200">
      <div className="sidebar h-full border-r border-light-gray dark:border-dark-gray-03">
        <button
          className={`m-5 `}
          onClick={() => {
            setOpenMenu((prev) => !prev);
          }}
        >
          <img src={sidebarMenu} alt="" />
        </button>
        <div className="list">
          <ul>
            <li
              className={`flex relative duration-100 mb-1  rounded-lg cursor-pointer hover:bg-neutral-800 text-sm align-middle justify-start `}
            >
              <button
                className={`${menuOpen ? "px-4" : "align-middle justify-center"} py-4 duration-300 flex w-full`}
                onClick={() => {
                  setUrlPath("day");
                }}
              >
                <img
                  className={`${menuOpen ? "mr-4" : ""} w-5 grid duration-300 origin-bottom place-items-center justify-center`}
                  src={day}
                  alt=""
                />
               {menuOpen && " My day"}
              </button>
            </li>
            <li className="flex relative duration-100 mb-1  rounded-lg cursor-pointer hover:bg-neutral-800 text-sm align-middle justify-start w-full">
              <button
                className={`${menuOpen ? "px-4" : "align-middle justify-center"} py-4 duration-300 flex w-full`}
                onClick={() => {
                  setUrlPath("important");
                }}
              >
                <img
                  className={`${menuOpen ? "mr-4" : ""} w-5 grid duration-300 origin-bottom place-items-center justify-center`}
                  src={star}
                  alt=""
                />
                {menuOpen && "Important"}
              </button>
            </li>
            <li className="flex relative duration-100 mb-1  rounded-lg cursor-pointer hover:bg-neutral-800 text-sm align-middle justify-start w-full">
              <button
                className={`${menuOpen ? "px-4" : "align-middle justify-center"} py-4 duration-300 flex w-full`}
                onClick={() => {
                  setUrlPath("planned");
                }}
              >
                <img
                  className={`${menuOpen ? "mr-4" : ""} w-5 grid duration-300 origin-bottom place-items-center justify-center`}
                  src={planned}
                  alt=""
                />
                {menuOpen && "Planned"}
              </button>
            </li>
            <li className="flex relative duration-100 mb-1  rounded-lg cursor-pointer hover:bg-neutral-800 text-sm align-middle justify-start w-full">
              <button
                className={`${menuOpen ? "px-4" : "align-middle justify-center"} py-4 duration-300 flex w-full`}
                onClick={() => {
                  setUrlPath("assigned");
                }}
              >
                <img
                  className={`${menuOpen ? "mr-4" : ""} w-5 grid duration-300 origin-bottom place-items-center justify-center`}
                  src={assignedTask}
                  alt=""
                />
                {menuOpen && "Assigned to me"}
              </button>
            </li>
            <li className="flex relative duration-100 mb-1  rounded-lg cursor-pointer hover:bg-neutral-800 text-sm align-middle justify-start w-full">
              <button
                className={`${menuOpen ? "px-4" : "align-middle justify-center"} py-4 duration-300 flex w-full`}
                onClick={() => {
                  setUrlPath("tasks");
                }}
              >
                <img
                  className={`${menuOpen ? "mr-4" : ""} w-5 grid duration-300 origin-bottom place-items-center justify-center`}
                  src={tasks}
                  alt=""
                />
                {menuOpen && "Tasks"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftHome;
