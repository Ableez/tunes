import { useEffect } from "react";
import Flickity from "flickity";
import CarouselTaskCard from "./CarouselTaskCard";
// import data from "../utils/taskData";
import tasks from "../utils/tasks";

const TasksCarousel = () => {
  // change the first `left` to `center` to set slides to center
  const screen = window.innerWidth < 700 ? "left" : "left";
  useEffect(() => {
    const flkty = new Flickity(".carouselOfImages", {
      accessibility: false,
      autoPlay: false,
      pauseAutoPlayOnHover: false,
      cellAlign: `${screen}`,
      contain: false,
      draggable: true,
      friction: 0.2,
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
  }, [screen]);

  // const [colorIndex, setIndex] = useState(0);
  // const colors = [
  //   "#DEFFC3",
  //   "#C3FFF4",
  //   "#B0D0FF",
  //   "#C0FFB0",
  //   "#AEFF9A",
  //   "#FFC49A",
  //   "#9C9AFF",
  //   "#FFACE8",
  //   "#FFACCA",
  //   "#ACFFB4",
  //   "#FFE8AC",
  //   "#C0F47C",
  //   "#FF9595",
  //   "#CE7DFF",
  //   "#C05AFF",
  // ];
  // useEffect(() => {
  //   setIndex(Math.floor(Math.random() * colors.length));
  // }, []);

  const carouselItems = tasks.map((task) => {
    return (
      <CarouselTaskCard
        key={Math.floor(Math.random() * 9999999)}
        participants={task.participants.map((participant) => {
          return participant.username, participant.profileImage;
        })}
        taskTitle={task.title}
        dueDate={task.dueDate}
      />
    );
  });

  console.log(carouselItems);
  return (
    <>
      <div className="grid place-items-center w-full relative" style={{overflow: "hidden"}}>
        <div className="carouselOfImages h-fit" style={{ width: "100%" }}>
          {carouselItems}
        </div>
        <div className="carouselCoverRight" style={{height: "100vh"}}></div>
      </div>
    </>
  );
};

export default TasksCarousel;
