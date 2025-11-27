import { useState } from "react";
import "./App.css";
import { Button } from "./CalculatorButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Calculator 🌸</h1>
      <div className="calculator-buttons">
        <Button onClick={() => {}} color="#CEA6B1">
          7
        </Button>
        <Button onClick={() => {}} color="#CB9EAA">
          8
        </Button>
        <Button onClick={() => {}} color="#C697A4">
          9
        </Button>
        <Button onClick={() => {}} color="#CEA6B1">
          4
        </Button>
        <Button onClick={() => {}} color="#CB9EAA">
          5
        </Button>
        <Button onClick={() => {}} color="#C697A4">
          6
        </Button>
        <Button onClick={() => {}} color="#CEA6B1">
          1
        </Button>
        <Button onClick={() => {}} color="#CB9EAA">
          2
        </Button>
        <Button onClick={() => {}} color="#C697A4">
          3
        </Button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
