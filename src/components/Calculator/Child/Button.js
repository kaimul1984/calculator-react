import React from "react";
import "./button.scss";
const Button = ({ title, value, input, setInput, output, setOutput }) => {
  const displayNUmber = (e) => {
    e.preventDefault();
    //console.log(e.target.value)
    //let number = input.concat(e.target.value)
    let number = (input += e.target.value);
    if (!number.includes('value')) {
       setInput(number.replace(/^0/, ''));
    }
   //console.log(!number.includes("value"));
  };
  const clear = () => {
    setInput("0");
    setOutput('0')
  };
  const deleteLastDigit = () => {
    setInput(input.slice(0, -1)); //input.length-1
  };
  const percentage = () => {
    setInput(input / 100);
  };
  const calculate = () => {
    try {
      //let calculation = eval(input)
      let calculation = Function('return ' + input)
      setOutput(calculation)
    } catch (error) {
      setOutput(input.slice(0, -1));
    }
    
  };

  return (
    <button
      value={value}
      onClick={
        value === "ac"
          ? clear
          : displayNUmber && value === "delete"
          ? deleteLastDigit
          : displayNUmber && value === "%"
          ? percentage
          : displayNUmber && value === "="
          ? calculate
          : displayNUmber
      }>
      {title}
    </button>
  );
};

export default Button;
