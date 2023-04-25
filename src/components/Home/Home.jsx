import React from "react";
import Menu from "../Menu/Menu";
import Analytics from "../Analytics/Analytics";
import "./home.modul.scss";

const Home = () => {
  return (
    <div className="home">
      <Menu />
      <Analytics />
    </div>
  );
};

export default Home;
