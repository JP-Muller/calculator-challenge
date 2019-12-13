import React, { Component } from "react";
import Operations from "./components/Operations/Operations";
import Logic from "./components/Logic/Logic";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentOperator: "Addition",
      currentNumber: null,
      previousNumber: null,
      operateToggled: false,
      solveToggled: false,
      pastOperations: []
    };
  }

  flipSolveToggled = () => {
    const { solveToggled, previousNumber, currentNumber } = this.state;
    if (previousNumber && currentNumber) {
      this.setState({ solveToggled: !solveToggled });
    }
  };

  changeOperator = operator => {
    this.setState({
      currentOperator: operator,
      operateToggled: false
    });
    this.clearInput();
  };

  toggleOperatePress = () => {
    const { operateToggled, currentNumber } = this.state;
    if (currentNumber) {
      this.setState({ operateToggled: !operateToggled });
    }
  };

  getNewNumber = value => {
    let { currentNumber, previousNumber, operateToggled } = this.state;
    if (!currentNumber && !operateToggled) {
      this.setState({ currentNumber: value }, () => {});
    } else if (currentNumber && !operateToggled && value !== "-") {
      this.setState({ currentNumber: currentNumber.concat(value) });
    } else if (currentNumber && operateToggled && !previousNumber) {
      this.setState({
        previousNumber: currentNumber,
        currentNumber: value
      });
    } else if (currentNumber && operateToggled && previousNumber) {
      this.setState({
        currentNumber: currentNumber.concat(value)
      });
    }
  };

  addPastOperation = solution => {
    let {
      currentNumber,
      previousNumber,
      currentOperator,
      pastOperations
    } = this.state;

    if (currentOperator === "Addition") {
      pastOperations.unshift(
        `${previousNumber} + ${currentNumber} = ${solution}`
      );
      this.clearInput();
      this.toggleOperatePress();
      this.flipSolveToggled();
    } else if (currentOperator === "Multiplication") {
      pastOperations.unshift(
        `${previousNumber} x ${currentNumber} = ${solution}`
      );
      this.clearInput();
      this.toggleOperatePress();
      this.flipSolveToggled();
    } else if (currentOperator === "Division") {
      pastOperations.unshift(
        `${previousNumber} / ${currentNumber} = ${solution}`
      );
      this.clearInput();
      this.toggleOperatePress();
      this.flipSolveToggled();
    }
    if (pastOperations.length > 5) {
      pastOperations.pop();
    }
  };

  clearInput = () => {
    this.setState({
      currentNumber: null,
      previousNumber: null,
      operateToggled: false
    });
  };

  render() {
    let {
      currentOperator,
      currentNumber,
      previousNumber,
      pastOperations,
      operateToggled,
      solveToggled
    } = this.state;
    return (
      <div className="App">
        <div className="operation-display">
          <Logic
            currentNumber={currentNumber}
            previousNumber={previousNumber}
            currentOperator={currentOperator}
            pastOperations={pastOperations}
            addPastOperation={this.addPastOperation}
            operateToggled={operateToggled}
            solveToggled={solveToggled}
          />
        </div>
        <div className="calc-wrapper">
          <Operations
            currentOperator={currentOperator}
            getNewNumber={this.getNewNumber}
            clearInput={this.clearInput}
            changeOperator={this.changeOperator}
            toggleOperatePress={this.toggleOperatePress}
            flipSolveToggled={this.flipSolveToggled}
          />
        </div>
      </div>
    );
  }
}

export default App;
