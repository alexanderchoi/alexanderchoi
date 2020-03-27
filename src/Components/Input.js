import React from "react";

export default function Input() {
  return (
    <div className="Input">
      <select required>
        <option value="" disabled selected hidden>
          Select sort method
        </option>
        <option>Quick sort</option>
        <option>Bubble sort</option>
        <option>Heap sort</option>
      </select>

      <input placeholder="Number of elements"></input>
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
