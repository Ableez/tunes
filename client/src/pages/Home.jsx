import LeftHome from "../Components/LeftHome";
import RightHome from "../Components/rightHome";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex align-top justify-items-stretch h-screen dark:bg-dark-gray-06 bg-light-gray-06">
        <div className="leftHome md:w-1/5">
          <LeftHome />
        </div>
        <div className="rightHome  md:w-4/5">
          <RightHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
