import homeIcon from "../Assets/home.svg";
import taskIcon from "../Assets/tasks.svg";
import searchIcon from "../Assets/search.svg";
import addTaskIcon from "../Assets/addTask.svg";
import homeClickedIcon from "../Assets/homeClicked.svg";
import taskClickedcon from "../Assets/tasksClicked.svg";
import searchClickedIcon from "../Assets/searchClicked.svg";
import { useEffect, useState } from "react";
const Footer = ({ scrollUp }) => {
  const [btnGroup, setBtnGroup] = useState({
    home: false,
    task: false,
    search: false,
    addTask: false,
  });
  useEffect(() => {}, []);
  const clickedFunc = (name) => {
    setBtnGroup(() => {
      return {
        home: false,
        task: false,
        search: false,
        addTask: false,
        [name]: true,
      };
    });
  };
  return (
    <div className="footer py-4 md:my-4 mx-auto md:w-2/6 w-full flex align-middle justify-center">
      {scrollUp && (
        <div className="rounded-3xl transition-all duration-300 bg-neutral-200 h-20 pr-8  w-5/6 grid place-items-center grid-flow-col">
          <button
            onClick={() => {
              clickedFunc("home");
            }}
            name="home"
            className={`flex hover:opacity-80 duration-300 align-middle justify-center cursor-pointer icon"`}
          >
            <img
              src={btnGroup.home === true ? homeClickedIcon : homeIcon}
              className="w-7 md:w-6 md:my-3 m-2 transition-all duration-300"
              alt=""
            />
            <div className="grid text  place-items-center my-3 font-semibold transition-all duration-300">
              {btnGroup.home === true && "Home"}
            </div>
          </button>
          <button
            onClick={() => {
              clickedFunc("task");
            }}
            name="task"
            className={`flex hover:opacity-80 duration-300 align-middle justify-center cursor-pointer allTasks"`}
          >
            <img
              src={btnGroup.task === true ? taskClickedcon : taskIcon}
              className="w-7 md:w-6 md:my-3 m-2 transition-all duration-300"
              alt=""
            />
            <div className="grid text  place-items-center my-3 font-semibold transition-all duration-300">
              {btnGroup.task === true && "Task"}
            </div>
          </button>
          <button
            onClick={() => {
              clickedFunc("search");
            }}
            name="search"
            className={`flex hover:opacity-80 duration-300 align-middle justify-center cursor-pointer searchTasks"`}
          >
            <img
              src={btnGroup.search === true ? searchClickedIcon : searchIcon}
              className="w-7 md:w-6 md:my-3 m-2 transition-all duration-300"
              alt=""
            />
            <div className="grid text  place-items-center my-3 font-semibold transition-all duration-300">
              {btnGroup.search === true && "Search"}
            </div>
          </button>
        </div>
      )}
      <div
        className={`w-20 h-20 grid bg-indigo-400 ${
          scrollUp && "-ml-7"
        } cursor-pointer rounded-3xl float-right place-items-center `}
      >
        <button
          onClick={() => clickedFunc("addTask")}
          name="addTask"
          className={`ex align-middle justify-center addTasks cursor-pointer"`}
        >
          <img src={addTaskIcon} className="w-7 md:w-6 md:m-1 m-2" alt="" />
        </button>
      </div>
    </div>
  );
};
export default Footer;
