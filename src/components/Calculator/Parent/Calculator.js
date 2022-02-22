import React,{useState} from "react";
import Button from "../Child/Button";
import "./calculator.scss";
import items from "../caculatorData";

const Calculator = () => {
   const [input, setInput] = useState("0");
   const [output, setOutput] = useState("0");
  return (
    <div className="container">
      <div className="screen">
        <div className="input">{input}</div>
        <div className="output">
          <span>=</span>{output}
        </div>
      </div>
      <div className="keypad">
        {items.map((item) => {
          return (
            <Button
              key={item.id}
              title={item.title}
              value={item.value}
              input={input}
              setInput={setInput}
              output={output}
              setOutput={setOutput}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
