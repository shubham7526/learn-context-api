import React, { useContext } from "react";
import { NodeContext } from "../Context/NodeContext";

const Component1 = () => {
  const [count, setCount] = useContext(NodeContext).counter;
  return (
    <div>
      <h1>Component1</h1>
      {count}
      <button onClick={() => setCount(count + 1)}>clik me</button>
    </div>
  );
};

export { Component1 };
