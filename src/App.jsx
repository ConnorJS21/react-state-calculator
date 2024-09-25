import { useState } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState("0");
  const [input2, setInput2] = useState("0");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("0");

  const handleNumberClick = (num, setInput) => {
    setInput(prev => (prev === "0" ? num : prev + num));
  };

  const handleClear = (setInput) => {
    setInput("0");
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
  };

  const handleEqualsClick = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let res = 0;
    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "÷":
        res = num2 !== 0 ? num1 / num2 : "Error";
        break;
      default:
        res = "Error";
        break;
    }
    setResult(res.toString());
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{input1}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => (
            <button key={num} onClick={() => handleNumberClick(num.toString(), setInput1)}>
              {num}
            </button>
          ))}
          <button onClick={() => handleClear(setInput1)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          {["+", "-", "*", "÷"].map(op => (
            <button key={op} onClick={() => handleOperatorClick(op)}>
              {op}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{input2}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => (
            <button key={num} onClick={() => handleNumberClick(num.toString(), setInput2)}>
              {num}
            </button>
          ))}
          <button onClick={() => handleClear(setInput2)}>Clear</button>
        </div>
      </div>
      
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleEqualsClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
