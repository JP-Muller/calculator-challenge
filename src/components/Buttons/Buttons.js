import React from "react";
import "./Buttons.css";

function Buttons(props) {
  const { getNewNumber, clearInput } = props;
  return (
    <div>
      <div className="calc-wrap">
        <div className="button-row">
          <button
            className="symbol-keys"
            onClick={e => getNewNumber(e.target.value)}
            value={7}
          >
            7
          </button>
          <button
            className="symbol-keys"
            onClick={e => getNewNumber(e.target.value)}
            value={8}
          >
            8
          </button>
          <button
            className="symbol-keys"
            onClick={e => getNewNumber(e.target.value)}
            value={9}
          >
            9
          </button>
        </div>
        <div className="button-row">
          <button
            className="symbol-keys"
            onClick={e => getNewNumber(e.target.value)}
            value={4}
          >
            4
          </button>
          <button
            className="symbol-keys"
            onClick={e => getNewNumber(e.target.value)}
            value={5}
          >
            5
          </button>
          <button
            className="symbol-keys"
            onClick={e => getNewNumber(e.target.value)}
            value={6}
          >
            6
          </button>
        </div>
        <div className="button-row">
          <button
            className="symbol-keys"
            onClick={e => getNewNumber(e.target.value)}
            value={1}
          >
            1
          </button>
          <button
            className="symbol-keys"
            onClick={e => getNewNumber(e.target.value)}
            value={2}
          >
            2
          </button>
          <button
            className="symbol-keys"
            onClick={e => getNewNumber(e.target.value)}
            value={3}
          >
            3
          </button>
        </div>
        <div className="button-row">
          <button
            className="symbol-keys"
            onClick={e => getNewNumber(e.target.value)}
            value={0}
          >
            0
          </button>
          <button
            className="symbol-keys"
            onClick={e => getNewNumber(e.target.value)}
            value={"-"}
          >
            (-)
          </button>
          <button
            className="symbol-keys"
            onClick={e => getNewNumber(e.target.value)}
            value={"."}
          >
            .
          </button>
        </div>
        <div className="clear-container">
          <button className="clear-button" onClick={() => clearInput()}>
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
