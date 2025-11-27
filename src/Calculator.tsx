import { useState } from "react";
import { NumberDisplay } from "./NumberDisplay";
import { CalculatorButtons } from "./CalculatorButtons";

export function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");

  //   const onDivideClicked = () => {
  //     console.log("clicked it!!!");
  //   };

  const handleNumberClicked = (num: string) => {
    if (displayValue == "0") {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleClearClicked = () => {
    setDisplayValue("0");
  };

  const handleBackspaceClicked = () => {
    if (displayValue.length === 1) {
      setDisplayValue("0");
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  const buttonActions = {
    onNumberClicked: handleNumberClicked,
    onClearClicked: handleClearClicked,
    onBackspaceClicked: handleBackspaceClicked,
  };

  return (
    <>
      <NumberDisplay value={displayValue} />
      <CalculatorButtons
        onNumberClicked={handleNumberClicked}
        onClearClicked={handleClearClicked}
        onBackspaceClicked={handleBackspaceClicked}
      />
    </>
  );
}
