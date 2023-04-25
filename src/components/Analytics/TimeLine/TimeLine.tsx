import React from "react";
import "./timeLine.modul.scss";

const items = [
  {
    color: "#00AB55",
    title: "1983, orders, $4220",
    text: "2 hours ago",
    img: "dot-1.svg",
  },
  {
    color: "#FFC107",
    title: "12 Invoices have been paid",
    text: "2 hours ago",
    img: "dot-2.svg",
  },
  {
    color: "#1890FF",
    title: "Order #37745 from September",
    text: "25 Jul 2020",
    img: "dot-3.svg",
  },
  {
    color: "#FF4842",
    title: "New order placed #XF-2356",
    text: "22 Nov 2020",
    img: "dot-4.svg",
  },
  {
    color: "#54D62C",
    title: "New order placed #XF-2356.",
    text: "24 Sep 2020",
    img: "dot-5.svg",
  },
];

const TimeLine = () => {
  return (
    <div
      className="timeLine-theme"
      // style={{
      //   minWidth: "310px",
      //   height: "389px",
      //   padding: "24px",
      //   borderRadius: "16px",
      //   boxShadow:
      //     "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
      // }}
    >
      <h2
        style={{
          marginBottom: "30px",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "28px",
        }}
      >
        Order Timeline
      </h2>
      <div>
        {items.map((e) => (
          <div key={e.title} style={{ display: "flex", gap: "16px" }}>
            <img src={require(`../../../assets/img/${e.img}`)} alt="" />
            <div>
              <h4
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "22px",
                }}
              >
                {" "}
                {e.title}
              </h4>
              <p>{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
