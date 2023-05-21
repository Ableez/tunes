import day from "../Assets/day.svg";
import star from "../Assets/star.svg";
import tasks from "../Assets/tasks.svg";
import planned from "../Assets/planned.svg";
import assignedTask from "../Assets/assignedTask.svg";
import { AppContext } from "../App";
import { useContext } from "react";

const LeftHome = () => {
  const { urlPath, setUrlPath } = useContext(AppContext);

  return (
    <div className="h-full  transition-all duration-200">
      <div className="sidebar h-full border-r border-light-gray dark:border-dark-gray-03">
        <div className="list p-2">
          <ul>
            <li className="flex relative duration-100 mb-1  rounded-lg cursor-pointer hover:bg-neutral-800 text-sm align-middle justify-start w-full">
              <button
                className="py-4 px-4 flex w-full"
                onClick={() => {
                  console.log(urlPath);
                  setUrlPath("day");
                }}
              >
                <span className="listhero w-1 bg-blue absolute h-3  rounded-full top-1/2 -translate-y-1/2 left-0"></span>
                <img
                  className="mr-4 w-5 flex align-middle justify-center"
                  src={day}
                  alt=""
                />
                My day
              </button>
            </li>
            <li className="flex relative duration-100 mb-1  rounded-lg cursor-pointer hover:bg-neutral-800 text-sm align-middle justify-start w-full">
              <button
                className="py-4 px-4 flex w-full"
                onClick={() => {
                  console.log(urlPath);
                  setUrlPath("important");
                }}
              >
                <span className="listhero w-1 bg-blue absolute h-3  rounded-full top-1/2 -translate-y-1/2 left-0"></span>
                <img
                  className="mr-4 w-5 flex align-middle justify-center"
                  src={star}
                  alt=""
                />
                Important
              </button>
            </li>
            <li className="flex relative duration-100 mb-1  rounded-lg cursor-pointer hover:bg-neutral-800 text-sm align-middle justify-start w-full">
              <button
                className="py-4 px-4 flex w-full"
                onClick={() => {
                  console.log(urlPath);
                  setUrlPath("planned");
                }}
              >
                <span className="listhero w-1 bg-blue absolute h-3  rounded-full top-1/2 -translate-y-1/2 left-0"></span>
                <img
                  className="mr-4 w-4 flex align-middle justify-center"
                  src={planned}
                  alt=""
                />
                Planned
              </button>
            </li>
            <li className="flex relative duration-100 mb-1  rounded-lg cursor-pointer hover:bg-neutral-800 text-sm align-middle justify-start w-full">
              <button
                className="py-4 px-4 flex w-full"
                onClick={() => {
                  console.log(urlPath);
                  setUrlPath("assigned");
                }}
              >
                <span className="listhero w-1 bg-blue absolute h-3  rounded-full top-1/2 -translate-y-1/2 left-0"></span>
                <img
                  className="mr-4 w-4 flex align-middle justify-center"
                  src={assignedTask}
                  alt=""
                />
                Assigned to me
              </button>
            </li>
            <li className="flex relative duration-100 mb-1  rounded-lg cursor-pointer hover:bg-neutral-800 text-sm align-middle justify-start w-full">
              <button
                className="py-4 px-4 flex w-full"
                onClick={() => {
                  console.log(urlPath);
                  setUrlPath("tasks");
                }}
              >
                <span className="listhero w-1 bg-blue absolute h-3  rounded-full top-1/2 -translate-y-1/2 left-0"></span>
                <img
                  className="mr-4 w-4 flex align-middle justify-center"
                  src={tasks}
                  alt=""
                />
                Tasks
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftHome;
