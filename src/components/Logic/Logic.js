import React, { useEffect } from "react";
import "./Logic.css";

export default function Logic(props) {
  const [solution, setSolution] = React.useState(null);
  const {
    currentNumber,
    previousNumber,
    currentOperator,
    pastOperations,
    addPastOperation,
    operateToggled,
    solveToggled
  } = props;

  function completeOperation() {
    if (currentOperator === "Addition") {
      setSolution(parseFloat(currentNumber) + parseFloat(previousNumber));
      addPastOperation(parseFloat(currentNumber) + parseFloat(previousNumber));
      setSolution(null);
    } else if (currentOperator === "Multiplication") {
      setSolution(parseFloat(currentNumber) * parseFloat(previousNumber));
      addPastOperation(parseFloat(currentNumber) * parseFloat(previousNumber));
      setSolution(null);
    } else {
      setSolution(parseFloat(previousNumber) / parseFloat(currentNumber));
      addPastOperation(parseFloat(previousNumber) / parseFloat(currentNumber));
      setSolution(null);
    }
  }
  useEffect(() => {
    if (currentNumber && previousNumber && solveToggled) {
      completeOperation();
    }
  }, [currentNumber, previousNumber, solveToggled]);

  return (
    <div className="logic-container">
      <div className="logic-view">
        {currentNumber && !previousNumber
          ? currentNumber
          : currentNumber && previousNumber
          ? previousNumber
          : null}
        {currentOperator === "Addition" && operateToggled
          ? " + "
          : currentOperator === "Multiplication" && operateToggled
          ? " x "
          : currentOperator === "Division" && operateToggled
          ? " / "
          : currentOperator === "Addition" && solution
          ? " + "
          : currentOperator === "Multiplication" && solution
          ? " x "
          : currentOperator === "Division" && solution
          ? " / "
          : null}
        {currentNumber && !previousNumber ? null : currentNumber}
        {currentNumber && previousNumber && solveToggled ? " = " : null}
        {currentNumber && previousNumber ? solution : null}
      </div>
      <div className="history-view">
        <div className="history-header">HISTORY (Last 5 Operations)</div>
        {pastOperations.map((operation, i) => {
          return <div key={i}>{operation}</div>;
        })}
      </div>
    </div>
  );
}
