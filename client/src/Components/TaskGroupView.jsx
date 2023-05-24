/* eslint-disable react/prop-types */
import { useContext } from "react";
import MenuDropdown from "./MenuDropdown";
import { AppContext } from "../App";

const TaskGroupView = ({ taskTitle, completed, _id, handleCheckboxChange }) => {
  const { taskMenu, setTaskMenuAction } = useContext(AppContext);

  return (
    <div className="task dark:bg-neutral-800 peer bg-light-gray-03 transition-colors p-4 py-4 cursor-pointer hover:bg-dark-gray-05 duration-200 hover:border-dark-gray-04 border mb-2 border-neutral-800 rounded-lg flex  align-middle justify-between">
      <div className="grid grid-flow-col place-items-center gap-3">
        <input
          id={`checkbox-${_id}`}
          type="checkbox"
          value=""
          onChange={() => {
            setTaskMenuAction({ completed: !taskMenu.completed, _id: _id });
            handleCheckboxChange(_id);
          }}
          checked={completed}
          className="w-5 h-5 border text-blue-600 focus:ring-0 cursor-pointer bg-light-gray border-gray-300 rounded  dark:bg-dark-gray-04  dark:border-gray-600"
        />
        <h4 className="taskTitle ">{taskTitle}</h4>
      </div>
      <div className=" transition-all duration-150 grid place-items-center h-fit place-self-center">
        <MenuDropdown _id={_id} />
      </div>
    </div>
  );
};

export default TaskGroupView;
