import { useState } from "react";
import { NumberDisplay } from "./NumberDisplay";
import { CalculatorButtons } from "./CalculatorButtons";

export function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [storedValue, setStoredValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  const handleNumberClicked = (num: string) => {
    setDisplayValue(displayValue === "0" ? num : displayValue + num);
    // if (displayValue == "0") {
    //   setDisplayValue(num);
    // } else {
    //   setDisplayValue(displayValue + num);
    // }
  };

  const handleClearClicked = () => {
    setDisplayValue("0");
    setStoredValue(null);
    setOperation(null);
  };

  const handleBackspaceClicked = () => {
    if (displayValue.length === 1) {
      setDisplayValue("0");
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  const handleAddClicked = () => {
    setStoredValue(displayValue);
    setOperation("+");
    setDisplayValue("0");
  };

  const handleSubtractClicked = () => {
    setStoredValue(displayValue);
    setOperation("-");
    setDisplayValue("0");
  };

  const handleEqualsClicked = () => {
    if (storedValue && operation) {
      const num1 = parseFloat(storedValue);
      const num2 = parseFloat(displayValue);
      let result = 0;

      if (operation === "+") {
        result = num1 + num2;
      } else if (operation === "-") {
        result = num1 - num2;
      }

      setDisplayValue(result.toString());
      setStoredValue(null);
      setOperation(null);
    }
  };

  // const buttonActions = {
  //   onNumberClicked: handleNumberClicked,
  //   onClearClicked: handleClearClicked,
  //   onBackspaceClicked: handleBackspaceClicked,
  // };

  return (
    <>
      <NumberDisplay value={displayValue} />
      <CalculatorButtons
        onNumberClicked={handleNumberClicked}
        onClearClicked={handleClearClicked}
        onBackspaceClicked={handleBackspaceClicked}
        onAddClicked={handleAddClicked}
        onSubtractClicked={handleSubtractClicked}
        onEqualsClicked={handleEqualsClicked}
      />
    </>
  );
}
