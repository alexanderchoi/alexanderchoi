import React, { useState } from "react";
import "./App.css";

import Display from "./Components/Display.js";
import Input from "./Components/Input.js";

export default function App() {
  const [numElements, setNumElements] = useState(10);
  // const [algorithm, setAlgorithm] = useState("");

  const changeNumber = newNum => {
    setNumElements(newNum);
  };

  return (
    <div className="App">
      <p>Sort Algorithm Visualizer</p>
      <Display numElements={numElements} />
      <Input changeNumber={changeNumber} />
    </div>
  );
}
