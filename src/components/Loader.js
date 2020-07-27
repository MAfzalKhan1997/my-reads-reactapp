import React from "react";

function Loader(props) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{props.msg}</h2>
    </div>
  );
}

export default Loader;
