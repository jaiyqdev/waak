import React from "react";

const items = [
  { img: "facebook.png", number: "8,20k", text: "FaceBook" },
  { img: "google-color.png", number: "7,2k", text: "Google" },
  { img: "linkedin.png", number: "6,2k", text: "Linkedin" },
  { img: "Path.png", number: "4,5k", text: "Twitter" },
];

const Traffic = () => {
  return (
    <div
      className="traffic-theme"
      style={{
        display: "flex",
        width: "344px",
        height: "360px",
        borderRadius: "16px",
        boxShadow:
          "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
        flexDirection: "column",
        // background: "rgba(255, 255, 255, 1)",
      }}
    >
      <h2
        style={{
          alignItems: "center",
          padding: "24px",

          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "28px",
        }}
      >
        Traffic bt Site
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        {items.map((e) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              justifyContent: "center",
              height: "122px",
              width: "140px",

              borderRadius: "8px",
              boxSizing: "border-box",
              border: "1px solid rgba(145, 158, 171, 0.24)",
            }}
          >
            <img src={require(`../../assets/img/${e.img}`)} />
            <h2
              style={{
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "28px",
                marginTop: "8px",
              }}
            >
              {e.number}
            </h2>
            <p
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "22px",
                color: "background: rgba(99, 115, 129, 1)",
              }}
            >
              {e.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Traffic;
