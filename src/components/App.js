
import React, { useState, useEffect } from "react";
import "./../styles/App.css";

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    const calculateSum = () => {
      const total = numbers.reduce((total, number) => {
        return total + number;
      }, 0);

      setSum(total);
    };

    const timer = setTimeout(calculateSum, 0);

    return () => clearTimeout(timer);
  }, [numbers]);

  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);

    if (value.trim() !== "") {
      const number = parseInt(value, 10);

      if (!Number.isNaN(number)) {
        setNumbers((previousNumbers) => [
          ...previousNumbers,
          number
        ]);
      }
    }
  };

  return (
    <div id="main">
      <h1>Sum Calculator</h1>

      <input
        type="number"
        value={input}
        onChange={handleChange}
        placeholder="Enter a number"
      />

      <h2>Sum: {sum}</h2>
    </div>
  );
}

export default SumCalculator;
