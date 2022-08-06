import React, { useState, useEffect } from "react";
import axios from "axios";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [fromButtonClick, setFromButtonClick] = useState(1);

  const setCounterHandler = () => {
    setCount(count + 1);
  };

  // this is executed after render of the component
  useEffect(() => {
    console.log("Updating the Title");
    document.title = `You clicked ${count} times`;
    // eslint-disable-next-line
  }, [count]); // give "name" in the dep-array

  // Fetching the data from API
  // fetch use Effect

  const handleClick = () => {
    setFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [fromButtonClick]);

  return (
    <div className="use-effect">
      <h1>useEffect()</h1>
      <p>Output is in the Title bar</p>
      <div className="btn-container">
        <button onClick={setCounterHandler} className="btn">
          Click {count} Times
        </button>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={name}
          className="input-space-2"
          onChange={(e) => setName(e.target.value)}
          placeholder="Type Anything (conditional rendering)"
        ></input>
      </div>
      <h3> Fetch (Data) 👇</h3>
      <p>{posts.title}</p>
      <div className="btn-container">
        <input
          className="input-space"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button className="btn" type="button" onClick={handleClick}>
          FETCH
        </button>
      </div>
    </div>
  );
}

export default UseEffect;
