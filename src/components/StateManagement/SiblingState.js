import React, { useState } from "react";

function ParentComponent() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
}

function InputComponent({ inputValue, setInputValue }) {
  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
}

function DisplayComponent({ inputValue }) {
  return <p>{inputValue}</p>;
}
