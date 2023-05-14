import React from "react";

const TaskHighlights = () => {
  return (
    <div className="py-4 grid grid-flow-row place-items-start">
      <div className="step flex align-middle justify-start hover:bg-red-50 bg-neutral-50 cursor-pointer duration-300 transition-colors hover:border-b w-full p-3 border border-transparent hover:border-b-neutral-100">
        <input type="checkbox" name="" className="w-5" id="" />
        <h4 className="title font-semibold  md:ml-5 ml-1 mr-1">Kits</h4>
        <span className="mr-1"> - </span>
        <p>Pay for third-party UI kits</p>
      </div>
      <div className="step flex align-middle justify-start hover:bg-red-50 bg-neutral-50 cursor-pointer duration-300 transition-colors hover:border-b w-full p-3 border border-transparent hover:border-b-neutral-100">
        <input type="checkbox" name="" className="w-5" id="" />
        <h4 className="title font-semibold  md:ml-5 ml-1 mr-1">Choose Software</h4>
        <span className="mr-1"> - </span>
        <p>Pay Lorem, ipsum dolor.</p>
      </div>
      <div className="step flex align-middle justify-start hover:bg-red-50 bg-neutral-50 cursor-pointer duration-300 transition-colors hover:border-b w-full p-3 border border-transparent hover:border-b-neutral-100">
        <input type="checkbox" name="" className="w-5" id="" />
        <h4 className="title font-semibold  md:ml-5 ml-1 mr-1">Concept 1</h4>
        <span className="mr-1"> - </span>
        <p>Funny style</p>
      </div>
      <div className="step flex align-middle justify-start hover:bg-red-50 bg-neutral-50 cursor-pointer duration-300 transition-colors hover:border-b w-full p-3 border border-transparent hover:border-b-neutral-100">
        <input type="checkbox" name="" className="w-5" id="" />
        <h4 className="title font-semibold  md:ml-5 ml-1 mr-1">Contact client</h4>
        <span className="mr-1"> - </span>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default TaskHighlights;
