import React from "react";

import "./App.scss";
// import Menu from "./components/Menu/Menu";
// import Analytics from "./components/Analytics/Analytics";
import Home from "./components/Home/Home";
import { useSelector } from "react-redux";
import { useAppSelector } from "./components/Redux/store";

function App() {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div className={theme ? "light" : "black"}>
      {/* <div> */}
      <Home />
    </div>
  );
}

export default App;
