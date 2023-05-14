import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Welcome from "./pages/Welcome";
import { useEffect, useState, useCallback } from "react";
import debounce from "lodash/debounce";
import TestComp from "./Components/testComp";
const App = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const handleScroll = useCallback(
    debounce(() => {
      const st =
        window.screenY ||
        document.documentElement.scrollTop ||
        window.pageYOffset;
      if (st > lastScrollPos) {
        setScrollDirection("down");
      } else if (st < lastScrollPos) {
        setScrollDirection("up");
      }
      setLastScrollPos(() => (st <= 0 ? 0 : st));
    }, 60),
    [lastScrollPos]
  );
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <div className="" style={{ height: "200vh" }}>
      <div className="md:w-2/3 w-full px-3 md:px-0 m-auto">
        <div className="md:mx-auto md:flex md:align-middle my-8 md:justify-center">
          <Header />
        </div>
        <Welcome />
      </div>
      <div
        className="md:w-full w-full md:px-0 mx-auto"
        style={{
          position: "fixed",
          bottom: 0,
        }}
      >
        <Footer scrollUp={scrollDirection === "down" ? false : true} />
      </div>
    </div>
  );
};

export default App;
