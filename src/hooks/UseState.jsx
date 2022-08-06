import React, { useState } from "react";

const UseState = () => {
  const [domain, setDomain] = useState("Programming");
  const [name, setName] = useState("");
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  const changeName = () => {
    console.log("Clicked");
    setDomain("Developing");
    setFlag("true");
  };

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const addItems = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        name,
      },
    ]);
    setName("");
  };

  // main function
  return (
    <div className="use-state">
      <h1>useState()</h1>
      <h3>Update Status 👉 {domain}</h3>
      <p>Currently the status is ➡ {flag ? "Employed" : "Unemployed"}</p>
      <h3>Counter Value : {count}</h3>
      <div className="btn-container">
        <button className="btn" onClick={changeName}>
          Change Status
        </button>
        <button className="btn" onClick={increase}>
          +
        </button>
        <button className="btn" onClick={decrease}>
          -
        </button>
      </div>
      <form onSubmit={addItems} className="input-container">
        <input
          type="text"
          value={name}
          className="input-space"
          onChange={(e) => setName(e.target.value)}
          placeholder="Add Items . . ."
        ></input>
        <button className="btn">ADD</button>
      </form>
      {items.map((item) => console.log(item.id, item.name))}
    </div>
  );
};

export default UseState;
