import React from "react";
import Counterlogic from "./Counterlogic";

const Hover = props => {
  return (
    <>
      <p onMouseOver={props.increment}> hovered {props.counts} times</p>
    </>
  );
};
export default Counterlogic(Hover);
