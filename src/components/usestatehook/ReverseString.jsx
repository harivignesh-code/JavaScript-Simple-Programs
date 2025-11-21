import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ReverseString = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  let location=useLocation()

//   let {name,gmail}=location.state
//   console.log(name);

console.log(location.state); //{obj}

let name=location.state?.name ||'guest'
let email=location.state?.email||'no email found'

console.log(name,email);


  

  function reverseText() {
    let reversed = "";
    
    
    for (let ch of text) {
      reversed = ch + reversed; 
    }

    setResult(reversed);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Reverse String (Simple Method)</h3>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px" }}
        placeholder="Enter text"
      />

      <br /><br />

      <button onClick={reverseText} style={{ padding: "6px 20px" }}>
        Reverse
      </button>

      <h3>Output: {result}</h3>
    </div>
  );
};

export default ReverseString;
