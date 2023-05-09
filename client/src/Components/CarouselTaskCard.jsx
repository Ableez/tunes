/* eslint-disable react/prop-types */
function CarouselTaskCard({ taskTitle, participants, dueDate }) {
  return (
    <div
      className="carousel-cell cursor-pointer gap-4 md:w-96 p-8 h-48 grid grid-rows-2 mx-4 bg-center bg-fill rounded-3xl"
      style={{
        // border: "1px solid lime"
        backgroundColor: "#ACFFB4",
      }}
    >
      <h4 className="taskTitle h-fit font-semibold  ">{taskTitle}</h4>
      <div className="grid place-items-center grid-cols-2 grid-flow-col w-full  justify-between">
        <div className="users  flex justify-start self-center place-self-start align-middle h-fit">
          <div key={Math.floor(Math.random() * 999999)} className="rounded-3xl">
            <img
              className="rounded-2xl profileImage transition-all duration-300 cursor-pointer object-cover w-10 h-10"
              src={participants.participantProfileImage}
              alt={`${participants.participantUsername}'s profile image`}
              title={`${participants.participantUsername}'s profile image`}
            />
          </div>
        </div>
        <div className="dueDate  self-center place-self-end h-fit float-right flex align-middle justify-center">
          <i className="calender"></i>
          <h3 className="font-semibold">{dueDate}</h3>
        </div>
      </div>
    </div>
  );
}

export default CarouselTaskCard;
