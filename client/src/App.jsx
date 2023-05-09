import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Welcome from "./pages/Welcome";
import { useEffect, useState } from "react";

const App = () => {
  // const [scrollDirection, setScrollDirection] = useState(null);

  // write the logic to determine weather the user is scrolling up or down
  useEffect(() => {
    function scroll() {
      console.table(window.screenY);
    }
    window.addEventListener("scroll", scroll());
    return window.removeEventListener("scroll", scroll());
  }, []);
  return (
    <div className="" style={{ height: "200vh" }}>
      <div className="md:w-2/3 w-full px-3 md:px-0 m-auto">
        <div className="md:mx-auto md:flex md:align-middle my-8 md:justify-center">
          <Header />
        </div>
        <Welcome />
        <div
          className="footer"
          style={{
            // if users scrolls up display will be none, if they scroll down display will be fixed. but initially it will be visible
            position: "fixed",
            bottom: 0,
            left: "50%",
            transform: "transateX(-50%)",
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
