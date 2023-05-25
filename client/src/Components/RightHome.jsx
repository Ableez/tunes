/* eslint-disable no-unused-vars */
import {
  React,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TaskList from "./TaskList";
import day from "../Assets/day.svg";
import star from "../Assets/star.svg";
import tasks from "../Assets/tasks.svg";
import planned from "../Assets/planned.svg";
import assignedTask from "../Assets/assignedTask.svg";
import Resizable from "../Components/Resizable";
import { AppContext } from "../App";

const RightHome = () => {
  const [showTask, setShowTask] = useState(false);
  const toggleViewTask = () => {
    setViewTask((prev) => !prev);
  };


  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [initialMouseX, setInitialMouseX] = useState(0);

  useEffect(() => {
    setSidebarWidth(sidebarRef.current.offsetWidth);
  }, []);

  const startResizing = useCallback((mouseDownEvent) => {
    setIsResizing(true);
    setInitialMouseX(mouseDownEvent.clientX);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        const currentMouseX = mouseMoveEvent.clientX;
        const sidebarLeft = sidebarRef.current.getBoundingClientRect().left;
        const newSidebarWidth = sidebarWidth - (currentMouseX - initialMouseX);

        // Prevent sidebar width from becoming negative or exceeding certain bounds
        const minWidth = 100;
        const maxWidth = 500;
        const clampedWidth = Math.max(
          minWidth,
          Math.min(newSidebarWidth, maxWidth)
        );

        setSidebarWidth(clampedWidth);
        setInitialMouseX(currentMouseX);
      }
    },
    [isResizing, initialMouseX, sidebarWidth]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  const [viewTask, setViewTask] = useState({
    view: false,
    _id: "",
  });

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
    <div className="app-container">
      <div className="grid grid-flow-col w-full" style={{ height: "90vh" }}>
        <div className=" relative duration-200">
          <div
            className="grid place-items-center justify-between w-full border-b border-dark-gray-03 bg-dark-gray-06 px-4 duration-100 bg-opacity-70 sticky top-0  py-6  "
            style={{
              zIndex: "999",
              backdropFilter: "blur(10px)",
              boxSizing: "border-box",
              height: "15vh",
            }}
          >
            <div className=" flex">
              <img
                className="mr-4 w-7 flex align-middle h-fit justify-center"
                src={icons.icon}
                alt=""
              />
              <span className="text-2xl dark:text-white text-dark-gray-06 font-semibold">
                {icons.list}
              </span>
            </div>
            <button className="Open" onClick={() => setShowTask((prev) => !prev)}>
              Open
            </button>
          </div>
          <div
            className=" relative px-2 box-border dark:bg-dark-gray-06 bg-light-gray-06 transition-all duration-200"
            style={{ height: "75vh" }}
          >
            <TaskList />
          </div>
        </div>
      </div>
      <div
        ref={sidebarRef}
        className="app-sidebar"
        style={{ flexBasis: sidebarWidth }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="app-sidebar-content" />
        <div className="app-sidebar-resizer" onMouseDown={startResizing} />
      </div>
    </div>
  );
};

export default RightHome;

