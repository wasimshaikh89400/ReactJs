import React, { useState } from "react";

const Calculator = () => {
  const [calc, setCalc] = useState(0);
  const [calcFirst, setCalcFirst] = useState(0);
  const [addCalc, setAddCalc] = useState(0);

  const setNewCalc = (eve) => {
    setCalc(eve.target.value);
  };

  const addNumber = () => {
    const add = parseInt(calc) + parseInt(calcFirst);
    setCalcFirst(add);
    setCalc(calcFirst);
    setCalc(0);
  };

  const subNumber = () => {
    const add = parseInt(calcFirst) - parseInt(calc);
    setCalcFirst(add);
    setCalc(calcFirst);
    setCalc(0);
  };
  const mulNumber = () => {
    if (addCalc === 0) {
      const add = parseInt(calc) * parseInt(calcFirst + 1);
      setCalcFirst(add);
      console.log(add);
      setCalc(0);
      setAddCalc(1);
    } else {
      const add = parseInt(calc) * parseInt(calcFirst);
      setCalcFirst(add);
      console.log(add);
      setCalc(0);
    }
  };
  const divNumber = () => {
    const add = parseInt(calcFirst) / parseInt(calc);
    setCalcFirst(add);
    setCalc(0);
  };
  const finalCalculation = () => {
    setCalc(calcFirst);
  };
  const addOne = () => {
    const add = calc + "1";
    setCalc(add);
    console.log(calc);
  };
  const addTwo = () => {
    const add = calc + "2";
    setCalc(add);
    console.log(calc);
  };
  const addThree = () => {
    const add = calc + "3";
    setCalc(add);
  };

  const addFour = () => {
    const add = calc + "4";
    setCalc(add);
  };
  const addFive = () => {
    const add = calc + "5";
    setCalc(add);
  };
  const addSix = () => {
    const add = calc + "6";
    setCalc(add);
  };
  const addSeven = () => {
    const add = calc + "7";
    setCalc(add);
  };
  const addEight = () => {
    const add = calc + "8";
    setCalc(add);
  };
  const addNine = () => {
    const add = calc + "9";
    setCalc(add);
  };
  const addZero = () => {
    const add = calc + "0";
    setCalc(add);
  };

  return (
    <div
      style={{
        marginTop: "70px",
        padding: "50px",
        border: "2px solid gray",
        width: "30%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <input
        type="text"
        value={calc}
        onChange={setNewCalc}
        style={{ marginBottom: "40px" }}
      ></input>

      <div>
        <button
          onClick={addSeven}
          className="btn btn-success"
          style={{ margin: "10px", width: "55px" }}
        >
          7
        </button>
        <button
          onClick={addEight}
          className="btn btn-success"
          style={{ margin: "10px", width: "55px" }}
        >
          8
        </button>
        <button
          onClick={addNine}
          className="btn btn-success"
          style={{ margin: "10px", width: "55px" }}
        >
          9
        </button>
        <button
          onClick={divNumber}
          className="btn btn-primary"
          style={{ margin: "10px", width: "55px" }}
        >
          /
        </button>
        <br></br>
        <button
          onClick={addFour}
          className="btn btn-success"
          style={{ margin: "10px", width: "55px" }}
        >
          4
        </button>
        <button
          onClick={addFive}
          className="btn btn-success"
          style={{ margin: "10px", width: "55px" }}
        >
          5
        </button>
        <button
          onClick={addSix}
          className="btn btn-success"
          style={{ margin: "10px", width: "55px" }}
        >
          6
        </button>
        <button
          onClick={mulNumber}
          className="btn btn-primary"
          style={{ margin: "10px", width: "55px" }}
        >
          *
        </button>
        <br></br>
        <button
          onClick={addOne}
          className="btn btn-success"
          style={{ margin: "10px", width: "55px" }}
        >
          1
        </button>
        <button
          onClick={addTwo}
          className="btn btn-success"
          style={{ margin: "10px", width: "55px" }}
        >
          2
        </button>
        <button
          onClick={addThree}
          className="btn btn-success"
          style={{ margin: "10px", width: "55px" }}
        >
          3
        </button>
        <button
          onClick={subNumber}
          className="btn btn-primary"
          style={{ margin: "10px", width: "55px" }}
        >
          -
        </button>
        <br></br>
        <button
          onClick={addZero}
          className="btn btn-success"
          style={{ margin: "10px", width: "55px" }}
        >
          0
        </button>
        <button
          onClick={finalCalculation}
          className="btn btn-warning"
          style={{ margin: "10px", width: "55px" }}
        >
          =
        </button>
        <button
          onClick={addNumber}
          className="btn btn-primary"
          style={{ margin: "10px", width: "55px" }}
        >
          +
        </button>
      </div>
      <h1>{calcFirst}</h1>
    </div>
  );
};

export default Calculator;
