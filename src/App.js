import "./App.css";
import { useState } from "react";
import { calculateB, calculateM } from "./functions";

function App() {
  const [input, setInput] = useState("");
  const [resultM, setResultM] = useState("");
  const [resultB, setResultB] = useState("");

  const handleSplit = (e) => {
    e.preventDefault();
    setResultM(calculateM(input));
    setResultB(calculateB(input));
  };
  return (
    <div className="App">
      <h1>BILL SPLITTER</h1>
      <form>
        TOTAL:
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={(e) => handleSplit(e)}>SPLIT</button>
      </form>
      <div className="result">
        <h2 style={{ margin: "2rem" }}>M: {resultM}</h2>
        <h2 style={{ margin: "2rem" }}>B: {resultB}</h2>
      </div>
    </div>
  );
}

export default App;
