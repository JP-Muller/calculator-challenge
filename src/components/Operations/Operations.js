import React, { Component } from "react";
import Buttons from "../Buttons/Buttons";
import "./Operations.css";

export class Operations extends Component {
  render(props) {
    let {
      currentOperator,
      currentNumber,
      previousNumber,
      getNewNumber,
      clearInput,
      changeOperator,
      toggleOperatePress,
      flipSolveToggled
    } = this.props;

    return (
      <div>
        <div className="keypad-container">
          <div
            className={
              "number-pad " +
              (currentOperator === "Addition" || currentOperator === "Division"
                ? "not-toggled"
                : " ")
            }
          >
            <header
              className="operation-header"
              onClick={() => changeOperator("Multiplication")}
            >
              Multiplication
            </header>
            <div
              className="operate-solve-container"
              style={
                currentOperator === "Addition" || currentOperator === "Division"
                  ? { pointerEvents: "none" }
                  : null
              }
            >
              <div
                className="operate-button"
                onClick={() => toggleOperatePress()}
              >
                x
              </div>
              <div className="solve-button" onClick={() => flipSolveToggled()}>
                =
              </div>
            </div>
            <div
              style={
                currentOperator === "Addition" || currentOperator === "Division"
                  ? { pointerEvents: "none" }
                  : null
              }
            >
              <Buttons
                currentNumber={currentNumber}
                previousNumber={previousNumber}
                getNewNumber={getNewNumber}
                clearInput={clearInput}
              />
            </div>
          </div>
          <div
            className={
              "number-pad " +
              (currentOperator === "Multiplication" ||
              currentOperator === "Division"
                ? "not-toggled"
                : " ")
            }
          >
            <header
              className="operation-header"
              onClick={() => changeOperator("Addition")}
            >
              Addition
            </header>
            <div
              className="operate-solve-container"
              style={
                currentOperator === "Division" ||
                currentOperator === "Multiplication"
                  ? { pointerEvents: "none" }
                  : null
              }
            >
              <div
                className="operate-button"
                onClick={() => toggleOperatePress()}
              >
                +
              </div>
              <div className="solve-button" onClick={() => flipSolveToggled()}>
                =
              </div>
            </div>
            <div
              style={
                currentOperator === "Division" ||
                currentOperator === "Multiplication"
                  ? { pointerEvents: "none" }
                  : null
              }
            >
              <Buttons
                currentNumber={currentNumber}
                previousNumber={previousNumber}
                getNewNumber={getNewNumber}
                clearInput={clearInput}
              />
            </div>
          </div>
          <div
            className={
              currentOperator === "Addition" ||
              currentOperator === "Multiplication"
                ? "number-pad not-toggled"
                : "number-pad"
            }
          >
            <header
              className="operation-header"
              onClick={() => changeOperator("Division")}
            >
              Division
            </header>
            <div
              className="operate-solve-container"
              style={
                currentOperator === "Addition" ||
                currentOperator === "Multiplication"
                  ? { pointerEvents: "none" }
                  : null
              }
            >
              <div
                className="operate-button"
                onClick={() => toggleOperatePress()}
              >
                /
              </div>
              <div className="solve-button" onClick={() => flipSolveToggled()}>
                =
              </div>
            </div>
            <div
              style={
                currentOperator === "Addition" ||
                currentOperator === "Multiplication"
                  ? { pointerEvents: "none" }
                  : null
              }
            >
              <Buttons
                currentNumber={currentNumber}
                previousNumber={previousNumber}
                getNewNumber={getNewNumber}
                clearInput={clearInput}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Operations;
