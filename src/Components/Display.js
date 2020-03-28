import React, { useState, useEffect } from "react";

export default function Display(props) {
  const [arr, setArr] = useState(Array(props.numElements).fill(0));

  React.useEffect(() => {
    onChangeProps();
  });

  function onChangeProps() {
    console.log(props.numElements);
    setArr(props.numElements);
  }

  return (
    <div className="Display">
      <p>Display</p>
      {/* <p>State num: {num}</p> */}
      <p>State: arr: {arr}</p>
      <span>Number of elements: {arr.length}</span>
      <p>Array looks like {arr}</p>
    </div>
  );
}
