import React from "react";
import { Link } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";

const TaskGroupView = ({ taskTitle, completed, link }) => {
  return (
    <Link to={taskTitle}>
      <div>
        <label
          htmlFor="default-checkbox"
          className="task dark:bg-neutral-800 bg-light-gray-03 transition-colors p-4 py-4 cursor-pointer hover:bg-dark-gray-05 duration-200 hover:border-dark-gray-04 border mb-1 border-neutral-800 rounded-lg flex  align-middle justify-between"
        >
          <div className="grid grid-flow-col place-items-center gap-3">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              checked={completed}
              className="w-5 h-5 border text-blue-600 focus:ring-0 cursor-pointer bg-light-gray border-gray-300 rounded  dark:bg-dark-gray-04  dark:border-gray-600"
            />
            <h4 className="taskTitle ">{taskTitle}</h4>
          </div>
          <div className="taskMenu transition-all duration-150 grid place-items-center h-fit place-self-center">
            <MenuDropdown />
          </div>
        </label>
      </div>
    </Link>
  );
};

export default TaskGroupView;
