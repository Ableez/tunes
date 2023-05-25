import LeftHome from "../Components/LeftHome";
import RightHome from "../Components/RightHome";
import Navbar from "../Components/Navbar";
import { useState } from "react";

const Home = () => {
  const [menuOpen, setOpenMenu] = useState(false);

  return (
    <div>
      <Navbar />
      <div
        className={`flex align-top justify-between duration-200 dark:bg-dark-gray-06 bg-light-gray-06`}
      >
        <div className={`${menuOpen ? "md:w-1/5" : "w-20"} `}>
          <LeftHome menuOpen={menuOpen} setOpenMenu={setOpenMenu} />
        </div>
        <div className={`rightHome duration-100 ${menuOpen ? "md:w-4/5" : "w-full"}`}>
          <RightHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
