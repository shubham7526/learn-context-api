import React, { createContext, useState } from "react";

export const NodeContext = createContext();

export const NodeContextApp = (props) => {
  const [count, setCount] = useState(0);
  const obj = {
    counter: [count, setCount]
  };

  return (
    <NodeContext.Provider value={obj}>{props.children}</NodeContext.Provider>
  );
};                                                                                                                                                                                                  