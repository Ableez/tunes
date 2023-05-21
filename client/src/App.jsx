import Home from "./pages/Home";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppContext = createContext();

const App = () => {
  const [urlPath, setUrlPath] = useState("day");
  return (
    <BrowserRouter>
      <AppContext.Provider value={{ urlPath, setUrlPath }}>
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
