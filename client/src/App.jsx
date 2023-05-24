import Home from "./pages/Home";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppContext = createContext();

const App = () => {
  const [urlPath, setUrlPath] = useState("day");
  const [taskMenu, setTaskMenu] = useState({
    action: null,
    _id: null,
    completed: false,
  });
  const setTaskMenuAction = (action) => {
    setTaskMenu((prev) => {
      return {
        ...prev,
        ...action,
        completed:
          action.completed !== undefined ? action.completed : prev.completed,
      };
    });
  };

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{ urlPath, setUrlPath, taskMenu, setTaskMenuAction }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
