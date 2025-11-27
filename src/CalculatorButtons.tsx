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

export function CalculatorButtons(props: ButtonActions) {
  return (
    <div className="calculator-buttons">
      <Button onClick={() => props.onNumberClicked("7")} color="#CEA6B1">
        7
      </Button>
      <Button onClick={() => props.onNumberClicked("4")} color="#CEA6B1">
        4
      </Button>
      <Button onClick={() => props.onNumberClicked("1")} color="#CEA6B1">
        1
      </Button>
      <Button onClick={props.onClearClicked} color="#CEA6B1">
        C
      </Button>
      <Button onClick={() => props.onNumberClicked("8")} color="#CEA6B1">
        8
      </Button>
      <Button onClick={() => props.onNumberClicked("5")} color="#CEA6B1">
        5
      </Button>
      <Button onClick={() => props.onNumberClicked("2")} color="#CEA6B1">
        2
      </Button>
      <Button onClick={() => props.onNumberClicked("0")} color="#CEA6B1">
        0
      </Button>
      <Button onClick={() => props.onNumberClicked("9")} color="#CEA6B1">
        9
      </Button>
      <Button onClick={() => props.onNumberClicked("6")} color="#CEA6B1">
        6
      </Button>
      <Button onClick={() => props.onNumberClicked("3")} color="#CEA6B1">
        3
      </Button>
      <Button onClick={() => props.onNumberClicked(".")} color="#CEA6B1">
        .
      </Button>
      <Button onClick={props.onToggleSignClicked} color="#CEA6B1">
        +/-
      </Button>
      <Button onClick={props.onMultiplyClicked} color="#CEA6B1">
        *
      </Button>
      <Button onClick={props.onSubtractClicked} color="#CEA6B1">
        -
      </Button>
      <Button onClick={props.onAddClicked} color="#CEA6B1">
        +
      </Button>
      <Button onClick={props.onBackspaceClicked} color="#CEA6B1">
        ←
      </Button>
      <Button onClick={props.onDivideClicked} color="#CEA6B1">
        ÷
      </Button>
      <Button onClick={props.onEqualsClicked} color="#C697A4">
        =
      </Button>
    </div>
  );
}
