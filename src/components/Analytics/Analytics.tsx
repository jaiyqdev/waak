import React from "react";
import AnalyticsHeader from "./AnalyticsHeader/AnalyticsHeader";
import News from "./News/News";
import TimeLine from "./TimeLine/TimeLine";
import "./analytics.modul.scss";
import iconS from "../../assets/img/IconSearch.svg";
import { useDispatch } from "react-redux";
import { setTheme } from "../Redux/themeSlice";
import { useAppSelector } from "../Redux/store";
import sun from "../../assets/img/sun.svg";
import moon from "../../assets/img/moon.svg";
import Traffic from "../Traffic/Traffic";
import Task from "../Task/Task";

const Analytics = () => {
  const dispatch = useDispatch();

  const theme = useAppSelector((state) => state.theme);
  console.log("tehe", theme);
  return (
    <div className="analytics">
      <div className="analytics-nav">
        <div className="nav-item">
          <img src={iconS} alt="" />
          <input type="text" />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "30px", transition: "500ms linear" }}
            src={theme ? sun : moon}
            alt=""
            onClick={() => dispatch(setTheme())}
          ></img>
          <img src={require(`../../assets/nav/#.png`)} alt="" />
          <img src={require("../../assets/nav/#-1.png")} alt="" />
          <img src={require("../../assets/nav/#-2.png")} alt="" />
          <img src={require("../../assets/img/person.png")} alt="" />
        </div>
      </div>
      <h1
        className="title"
        style={{
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "36px",
        }}
      >
        Hi, Welcome back
      </h1>
      <AnalyticsHeader />
      <div
        className="news-timeLine"
        style={{ display: "flex", gap: "24px", marginTop: "24px" }}
      >
        <News />
        <TimeLine />
      </div>
      <div
        style={{
          display: "flex",
          gap: "24px",
          marginTop: "24px",
          marginBottom: "80px",
        }}
      >
        <Traffic />
        <Task />
      </div>
    </div>
  );
};

export default Analytics;
