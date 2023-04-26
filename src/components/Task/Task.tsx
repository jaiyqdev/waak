import React, { useState } from "react";
import "../Task/Task.scss";

const Task = () => {
  const [check, setCheck] = useState([
    { text: "Create FireStone Logo", id: "1", checked: false },
    { text: "Add SCSS and JS files if required", id: "2", checked: false },
    { text: "Stakeholder Meeting", id: "3", checked: false },
    { text: "Scoping & Estimations", id: "4", checked: false },
    { text: "Sprint Showcase", id: "5", checked: false },
  ]);
  const colorChange = (id: string) => {
    const res = check.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCheck(res);
  };

  return (
    <div
      className="task-theme"
      style={{
        maxWidth: "712px",
        height: "356px",
        boxShadow:
          "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
        borderRadius: "16px",
      }}
    >
      <h2
        style={{
          margin: "24px",
          fontWeight: "700",
          fontSize: "18px",
          lineHeight: "28px",
        }}
      >
        Tasks
      </h2>

      {check.map((e, i) => {
        return (
          <div className="task-inner">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <input
                className="check"
                type="checkbox"
                id={e.id}
                checked={e.checked}
                onChange={() => colorChange(e.id)}
                style={{
                  marginLeft: "19px",
                  backgroundColor: "green",
                }}
              />

              <label
                className="checkmark"
                htmlFor={e.id}
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "22px",
                  marginLeft: "11px",
                  marginRight: 0,

                  textDecorationLine: !e.checked ? "none" : "line-through",
                  color: !e.checked ? "#212B36" : "#919EAB",
                }}
              >
                <h4
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "22px",
                    marginLeft: "11px",
                    // textDecorationLine: !e.checked ? "none" : "line-through",
                    // color: !e.checked ? "#212B36" : "#919EAB",
                  }}
                >
                  {e.text}
                </h4>
              </label>
            </div>
            <svg
              style={{ marginRight: "33px" }}
              width="4"
              height="16"
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.66668 2.16667C3.66668 3.08714 2.92049 3.83333 2.00001 3.83333C1.07954 3.83333 0.333344 3.08714 0.333344 2.16667C0.333344 1.24619 1.07954 0.5 2.00001 0.5C2.92049 0.5 3.66668 1.24619 3.66668 2.16667ZM3.66668 8C3.66668 8.92048 2.92049 9.66667 2.00001 9.66667C1.07954 9.66667 0.333344 8.92048 0.333344 8C0.333344 7.07953 1.07954 6.33333 2.00001 6.33333C2.92049 6.33333 3.66668 7.07953 3.66668 8ZM2.00001 15.5C2.92049 15.5 3.66668 14.7538 3.66668 13.8333C3.66668 12.9129 2.92049 12.1667 2.00001 12.1667C1.07954 12.1667 0.333344 12.9129 0.333344 13.8333C0.333344 14.7538 1.07954 15.5 2.00001 15.5Z"
                fill="#637381"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};

export default Task;
