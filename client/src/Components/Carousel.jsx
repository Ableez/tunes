import React, { useEffect, useState } from "react";
import Flickity from "flickity";
import tasks from "../utils/tasks";
const Carousel = () => {
  useEffect(() => {
    const flkty = new Flickity(".carouselContainer", {
      accessibility: false,
      autoPlay: false,
      pauseAutoPlayOnHover: false,
      cellAlign: "left",
      contain: false,
      draggable: true,
      friction: 0.25,
      initialIndex: 0,
      lazyLoad: false,
      percentPosition: true,
      prevNextButtons: false,
      pageDots: false,
      resize: true,
      rightToLeft: false,
      setGallerySize: true,
      watchCSS: false,
    });

    return () => flkty.destroy();
  }, []);
  const carouselItems = tasks.map((task) => {
    return (
      <div
        key={task._id}
        className="carouselCard mr-3 md:w-2/4 rounded-3xl object-contain overflow-clip border-2 w-screen"
      >
        <div
          className="cursor-pointer rounded-3xl gap-4 p-8 grid grid-rows-2 bg-center"
          style={{
            backgroundColor: "#9C9AFF",
            height: "200px",
            opacity: "0.8",
          }}
        >
          <h4 className="taskTitle h-fit font-semibold  ">{task.title}</h4>
          <div className="grid place-items-center grid-cols-2 grid-flow-col w-full  justify-between">
            <div className="users  flex justify-start self-center place-self-start align-middle h-fit">
              <div className="rounded-3xl">
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
      <div className="carouselContainer">{carouselItems}</div>
    </>
  );
};

export default Carousel;
