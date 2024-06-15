import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("0");

  const handleButtonClick = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  const handleClear = () => {
    setResult("0");
  };

  const handleEvaluate = () => {
    try {
      const evaluatedResult = new Function(`return ${result}`)();
      setResult(evaluatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="App main">
      <div className="display">
        <p id="result">{result}</p>
      </div>

      <div className="Buttons">
        <div className="btn button-row1">
          <Button onClick={() => handleButtonClick("7")}>7</Button>
          <Button onClick={() => handleButtonClick("8")}>8</Button>
          <Button onClick={() => handleButtonClick("9")}>9</Button>
          <Button onClick={() => handleButtonClick("/")}>/</Button>
        </div>

        <div className="btn button-row2">
          <Button onClick={() => handleButtonClick("4")}>4</Button>
          <Button onClick={() => handleButtonClick("5")}>5</Button>
          <Button onClick={() => handleButtonClick("6")}>6</Button>
          <Button onClick={() => handleButtonClick("*")}>*</Button>
        </div>
        <div className="btn button-row3">
          <Button onClick={() => handleButtonClick("1")}>1</Button>
          <Button onClick={() => handleButtonClick("2")}>2</Button>
          <Button onClick={() => handleButtonClick("3")}>3</Button>
          <Button onClick={() => handleButtonClick("-")}>-</Button>
        </div>
        <div className="btn button-row4">
          <Button onClick={() => handleButtonClick("00")}>00</Button>
          <Button onClick={() => handleButtonClick("0")}>0</Button>
          <Button onClick={() => handleButtonClick("000")}>000</Button>
          <Button onClick={() => handleButtonClick("+")}>+</Button>
        </div>
        <div className="btn button-row5">
          <Button onClick={handleEvaluate}>=</Button>
          <Button onClick={handleClear}>Clear</Button>
        </div>
      </div>
    </div>
  );
}

function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}
// Calculator
export default App;
