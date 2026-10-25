import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [answer, setAnswer] = useState("");

  const handleCalculate = () => {
    // Check for blank or invalid input
    if (!name1.trim() || !name2.trim()) {
      setAnswer("Please Enter valid input");
      return;
    }

    let s1 = name1.split("");
    let s2 = name2.split("");

    // Remove common letters (case-sensitive)
    for (let i = 0; i < s1.length; i++) {
      let char = s1[i];
      let index = s2.indexOf(char);
      if (index !== -1) {
        s1.splice(i, 1);
        s2.splice(index, 1);
        i--; // Adjust index after removal
      }
    }

    // Calculate sum of remaining lengths and take modulus by 6
    const totalLength = s1.length + s2.length;
    const remainder = totalLength % 6;

    // FLAMES mapping rules
    const flamesMap = {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy",
      0: "Siblings"
    };

    setAnswer(flamesMap[remainder]);
  };

  const handleClear = () => {
    setName1("");
    setName2("");
    setAnswer("");
  };

  return (
    <div id="main">
      <h2>FLAMES Game</h2>
      
      <div>
        <input
          type="text"
          data-testid="input1"
          name="name1"
          placeholder="Enter first name"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          data-testid="input2"
          name="name2"
          placeholder="Enter second name"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />
      </div>

      <div>
        <button
          data-testid="calculate_relationship"
          name="calculate_relationship"
          onClick={handleCalculate}
        >
          Calculate Relationship
        </button>

        <button
          data-testid="clear"
          name="clear"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>

      <div>
        <h3 data-testid="answer">{answer}</h3>
      </div>
    </div>
  );
}

export default App;
