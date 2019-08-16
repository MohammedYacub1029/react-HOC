import React from "react";
import Counterlogic from "./Counterlogic";
const Click = props => {
  return (
    <div>
      <button onClick={props.increment}>clicked {props.counts} times</button>
    </div>
  );
};
export default Counterlogic(Click);
