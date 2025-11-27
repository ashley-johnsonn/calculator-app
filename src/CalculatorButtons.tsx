import { Button } from "./CalculatorButton";

type ButtonActions = {
  onNumberClicked: (num: string) => void;
  onClearClicked: () => void;
  onBackspaceClicked: () => void;
  onAddClicked: () => void;
  onSubtractClicked: () => void;
  onEqualsClicked: () => void;
  onToggleSignClicked: () => void;
  onMultiplyClicked: () => void;
  onDivideClicked: () => void;
};

const pinkGradient = [
  "#F8D1EA", // Slightly darker lightest
  "#F5C1E0",
  "#F2B1D6",
  "#EFA1CC",
  "#EC91C2",
  "#E981B8",
  "#E671AE",
  "#E36CA9", // Darkest
];

export function CalculatorButtons(props: ButtonActions) {
  return (
    <div className="calculator-buttons">
      <Button
        onClick={() => props.onNumberClicked("7")}
        color={pinkGradient[0]}
      >
        7
      </Button>
      <Button
        onClick={() => props.onNumberClicked("4")}
        color={pinkGradient[1]}
      >
        4
      </Button>
      <Button
        onClick={() => props.onNumberClicked("1")}
        color={pinkGradient[2]}
      >
        1
      </Button>
      <Button onClick={props.onClearClicked} color={pinkGradient[3]}>
        C
      </Button>
      <Button
        onClick={() => props.onNumberClicked("8")}
        color={pinkGradient[1]}
      >
        8
      </Button>
      <Button
        onClick={() => props.onNumberClicked("5")}
        color={pinkGradient[2]}
      >
        5
      </Button>
      <Button
        onClick={() => props.onNumberClicked("2")}
        color={pinkGradient[3]}
      >
        2
      </Button>
      <Button
        onClick={() => props.onNumberClicked("0")}
        color={pinkGradient[4]}
      >
        0
      </Button>
      <Button
        onClick={() => props.onNumberClicked("9")}
        color={pinkGradient[2]}
      >
        9
      </Button>
      <Button
        onClick={() => props.onNumberClicked("6")}
        color={pinkGradient[3]}
      >
        6
      </Button>
      <Button
        onClick={() => props.onNumberClicked("3")}
        color={pinkGradient[4]}
      >
        3
      </Button>
      <Button
        onClick={() => props.onNumberClicked(".")}
        color={pinkGradient[5]}
      >
        .
      </Button>
      <Button onClick={props.onToggleSignClicked} color={pinkGradient[3]}>
        +/-
      </Button>
      <Button onClick={props.onMultiplyClicked} color={pinkGradient[4]}>
        ×
      </Button>
      <Button onClick={props.onSubtractClicked} color={pinkGradient[5]}>
        -
      </Button>
      <Button onClick={props.onAddClicked} color={pinkGradient[6]}>
        +
      </Button>
      <Button onClick={props.onBackspaceClicked} color={pinkGradient[4]}>
        ←
      </Button>
      <Button onClick={props.onDivideClicked} color={pinkGradient[5]}>
        ÷
      </Button>
      <Button onClick={props.onEqualsClicked} color={pinkGradient[7]}>
        =
      </Button>
    </div>
  );
}
