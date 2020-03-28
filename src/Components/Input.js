import React, { useRef } from "react";

export default function Input(props) {
  const inputElement = useRef(null);

  return (
    <div className="Input">
      <select required>
        <option>Quick sort</option>
        <option>Bubble sort</option>
        <option>Heap sort</option>
      </select>

      <input
        ref={inputElement}
        placeholder="Number of elements"
        type="tel"
        onChange={() => {
          props.changeNumber(inputElement.current.value);
        }}
      ></input>
      <button
        onClick={() => {
          console.log("sort");
        }}
      >
        Sort
      </button>
    </div>
  );
}
