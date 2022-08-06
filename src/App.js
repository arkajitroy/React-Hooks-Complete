import "./App.css";

// importing the hooks
import UseState from "./hooks/UseState";
import UseEffect from "./hooks/UseEffect";

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <p>Please open the Terminal to see output</p>
      <UseState />
      <UseEffect />
    </div>
  );
}

export default App;
