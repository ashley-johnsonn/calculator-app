import { useState } from "react";
import { NumberDisplay } from "./NumberDisplay";
import { CalculatorButtons } from "./CalculatorButtons";

export function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");

  const onDivideClicked = () => {
    console.log("clicked it!!!");
  };

  const buttonActions = {
    onDivideClicked,
  };
  return (
    <>
      <NumberDisplay value={displayValue} />
      <CalculatorButtons actions={buttonActions} />
    </>
  );
}
