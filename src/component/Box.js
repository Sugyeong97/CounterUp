import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <p>{props.num}</p>
      <p>{props.name}</p>
    </div>
  );
};

export default Box;
