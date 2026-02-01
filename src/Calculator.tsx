import { useState } from "react";
import { NumberDisplay } from "./NumberDisplay";
import { CalculatorButtons } from "./CalculatorButtons";

export function Calculator() {
  const [, setDisplayValue] = useState("0");
  const [storedValue, setStoredValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [currentInput, setCurrentInput] = useState("0");

  const getDisplayText = () => {
    if (storedValue && operation) {
      return `${storedValue} ${operation} ${currentInput}`;
    }
    return currentInput;
  };

  // Calculates pending operation for chaining (e.g. 1+1+1=3)
  // This should calculate the pending operation and return the result as a string
  // If there's no pending operation (storedValue or operation is null), return currentInput unchanged
  const calculatePendingOperation = (): string => {
    if (storedValue && operation) {
      const num1 = parseFloat(storedValue);
      const num2 = parseFloat(currentInput);
      let result = 0;

      if (operation === "+") {
        result = num1 + num2;
      } else if (operation === "-") {
        result = num1 - num2;
      } else if (operation === "*") {
        result = num1 * num2;
      } else if (operation === "/") {
        result = num1 / num2;
      }

      return result.toString();
    }
    return currentInput;
  };

  const handleNumberClicked = (num: string) => {
    const newInput = currentInput === "0" ? num : currentInput + num;
    setCurrentInput(newInput);
  };

  const handleClearClicked = () => {
    setDisplayValue("0");
    setStoredValue(null);
    setOperation(null);
    setCurrentInput("0");
  };

  const handleBackspaceClicked = () => {
    if (currentInput.length === 1) {
      setCurrentInput("0");
    } else {
      setCurrentInput(currentInput.slice(0, -1));
    }
  };

  const handleAddClicked = () => {
    setStoredValue(calculatePendingOperation());
    setOperation("+");
    setCurrentInput("0");
  };

  const handleSubtractClicked = () => {
    setStoredValue(calculatePendingOperation());
    setOperation("-");
    setCurrentInput("0");
  };

  const handleDivideClicked = () => {
    setStoredValue(calculatePendingOperation());
    setOperation("/");
    setCurrentInput("0");
  };

  const handleMultiplyClicked = () => {
    setStoredValue(calculatePendingOperation());
    setOperation("*");
    setCurrentInput("0");
  };

  const handleToggleSignClicked = () => {
    if (currentInput === "0") {
      return;
    }
    if (currentInput.startsWith("-")) {
      setCurrentInput(currentInput.substring(1));
    } else {
      setCurrentInput("-" + currentInput);
    }
  };

  const handleEqualsClicked = () => {
    setCurrentInput(calculatePendingOperation());
    setStoredValue(null);
    setOperation(null);
  };

  return (
    <>
      <NumberDisplay value={getDisplayText()} />
      <CalculatorButtons
        onNumberClicked={handleNumberClicked}
        onClearClicked={handleClearClicked}
        onBackspaceClicked={handleBackspaceClicked}
        onAddClicked={handleAddClicked}
        onSubtractClicked={handleSubtractClicked}
        onEqualsClicked={handleEqualsClicked}
        onToggleSignClicked={handleToggleSignClicked}
        onDivideClicked={handleDivideClicked}
        onMultiplyClicked={handleMultiplyClicked}
      />
    </>
  );
}
