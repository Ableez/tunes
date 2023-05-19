import React from "react";
import LeftHome from "../Components/LeftHome";
import rightHome from "../Components/rightHome";
import RightHome from "../Components/rightHome";

const Home = () => {
  return (
    <div
      className="w-full grid grid-flow-col h-screen"
      style={{ gridTemplateColumns: "1.5fr 9fr" }}
    >
      <div className="">
        <LeftHome />
      </div>
      <div className="">
        <RightHome />
      </div>
    </div>
  );
};

export default Home;
