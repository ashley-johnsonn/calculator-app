import { useState } from "react";
import "./App.css";
import { CalculatorButtons } from "./CalculatorButtons";

function App() {
  const [count, setCount] = useState(0);

  const onDivideClicked = () => {
    console.log("clicked it!!!");
  };

  const buttonActions = {
    onDivideClicked,
  };

  return (
    <>
      <h1>Calculator 🌸</h1>
      <CalculatorButtons actions={buttonActions} />
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
