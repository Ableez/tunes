import star from "../Assets/star.svg";

const TaskView = () => {
  return (
    <div className="p-4 grid grid-flow-row gap-3">
      <div className="top bg-dark-gray-05 rounded-lg">
        <div
          className="w-full p-4 grid grid-flow-col  align-middle"
          style={{ gridTemplateColumns: "1fr 18fr 1fr" }}
        >
          <span className="bg-dark-gray-03 duration-300 hover:bg-dark-indigo active:bg-dark-teal cursor-pointer rounded-full w-4 h-4 self-center"></span>
          <h4>Task title</h4>
          <img
            src={star}
            className="w-6 cursor-pointer hover:bg-dark-indigo active:bg-dark-teal"
            alt=""
          />
        </div>
        <div className="steps px-16 py-4 flex align-middle justify-start">
          <h4>Add Step</h4>
        </div>
      </div>
      <div
        className="top rounded-lg grid grid-flow-col gap-3"
      >
        <div className="p-4 bg-dark-gray-05 rounded-lg grid grid-flow-col align-middle">
          <span className="bg-dark-gray-03 duration-300 hover:bg-dark-indigo active:bg-dark-teal cursor-pointer rounded-full w-4 h-4 self-center"></span>
          <h4>Task title</h4>
        </div>
        <div className="p-4 bg-dark-gray-05 rounded-lg grid grid-flow-col align-middle">
          <span className="bg-dark-gray-03 duration-300 hover:bg-dark-indigo active:bg-dark-teal cursor-pointer rounded-full w-4 h-4 self-center"></span>
          <h4>Task title</h4>
        </div>
      </div>
      <div
        className="top rounded-lg grid grid-flow-col gap-3"
      >
        <div className="p-4 bg-dark-gray-05 rounded-lg grid grid-flow-col align-middle">
          <span className="bg-dark-gray-03 duration-300 hover:bg-dark-indigo active:bg-dark-teal cursor-pointer rounded-full w-4 h-4 self-center"></span>
          <h4>Task title</h4>
        </div>
        <div className="p-4 bg-dark-gray-05 rounded-lg grid grid-flow-col align-middle">
          <span className="bg-dark-gray-03 duration-300 hover:bg-dark-indigo active:bg-dark-teal cursor-pointer rounded-full w-4 h-4 self-center"></span>
          <h4>Task title</h4>
        </div>
      </div>
    </div>
  );
};

export default TaskView;
