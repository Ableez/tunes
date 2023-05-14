import React from "react";
import tasks from "../utils/tasks";

const TestComp = () => {
  const carouselItems = tasks.map((task) => {
    return (
      <div className="carouselCard mr-3 md:w-2/4 rounded-3xl object-contain overflow-clip w-full">
        <div
          className="card cursor-pointer rounded-3xl gap-4 p-8 grid grid-rows-2 bg-center"
          style={{
            backgroundColor: "#9C9AFF",
            height: "200px",
            opacity: "0.8",
          }}
        >
          <h4 className="taskTitle h-fit font-semibold  ">{task.title}</h4>
          <div className="grid place-items-center grid-cols-2 grid-flow-col w-full  justify-between">
            <div className="users  flex justify-start self-center place-self-start align-middle h-fit">
              <div
                key={Math.floor(Math.random() * 999999)}
                className="rounded-3xl"
              >
                <img
                  className="rounded-2xl profileImage transition-all duration-300 cursor-pointer object-cover w-10 h-10"
                  src=""
                />
              </div>
            </div>
            <div className="dueDate  self-center place-self-end h-fit float-right flex align-middle justify-center">
              <i className="calender"></i>
              <h3 className="font-semibold">{task.dueDate}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  });
  console.log(carouselItems);
  return (
    <>
      <div
        className="carouselContainer border h-36 grid grid-flow-"
        style={{ width: "100%" }}
      >
        {carouselItems}
      </div>
    </>
  );
};

export default TestComp;
