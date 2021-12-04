import { NodeContextApp } from "./Context/NodeContext";
import { Component1 } from "./Component/Component1";

export default function App() {
  return (
    <div className="App">
      <NodeContextApp>
        <Component1 />
      </NodeContextApp>
    </div>
  );
}
  