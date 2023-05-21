import Home from "./pages/Home";
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

export const AppContext = createContext();

const App = () => {
  return (
    <BrowserRouter>
      <AppContext.Provider value={"Test"}>
        <div className="bg-dark">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
