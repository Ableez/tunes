import LeftHome from "../Components/LeftHome";
import RightHome from "../Components/rightHome";
import Navbar from "../Components/Navbar";
import { useState } from "react";
const Home = () => {
  const [menuOpen, setOpenMenu] = useState(false);

  return (
    <div>
      <Navbar />
      <div
        className={`flex align-top justify-items-stretch dark:bg-dark-gray-06 bg-light-gray-06`}
      >
        <div className={`leftHome ${menuOpen ? "md:w-1/5" : "w-20"} `}>
          <LeftHome menuOpen={menuOpen} setOpenMenu={setOpenMenu} />
        </div>
        <div className={`rightHome  ${menuOpen ? "md:w-4/5" : "w-full"}`}>
          <RightHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
