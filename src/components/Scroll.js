import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1.5px solid black",
        height: "570px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
