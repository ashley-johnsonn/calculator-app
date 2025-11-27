import { Button } from "./CalculatorButton";

type ButtonActions = {
  actions: {
    onDivideClicked: () => void;
  };
};

export function CalculatorButtons(props: ButtonActions) {
  return (
    <div className="calculator-buttons">
      <Button onClick={() => {}} color="#CEA6B1">
        7
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        4
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        1
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        C
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        8
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        5
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        2
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        0
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        9
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        6
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        3
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        .
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        +/-
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        x
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        -
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        +
      </Button>
      <Button onClick={() => {}} color="#CEA6B1">
        ←
      </Button>
      <Button onClick={props.actions.onDivideClicked} color="#CEA6B1">
        ÷
      </Button>
      <Button onClick={() => {}} color="#C697A4">
        =
      </Button>
    </div>
  );
}
