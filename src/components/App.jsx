import React, { useState } from "react";
function App() {
  const [input, SetInput] = useState("");
  const [text, SetText] = useState([]);
  function handlechange(event) {
    SetInput(event.target.value);
  }
  function handleclick(event) {
    SetText((prevValue) => {
      return [...prevValue, input];
    });
    SetInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handlechange} type="text" value={input} />

        <button onClick={handleclick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {text.map((out) => (
            <li>{out}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
