import React from "react";
import "./styles.css";
import Counter from "./Components/Counter";
import InputNumber from "./Components/InputNumber";

export default function App() {
  return (
    <div className="App">
      <Counter 
      num = {5} /> 
      <InputNumber />
      
    </div>
  );
}
