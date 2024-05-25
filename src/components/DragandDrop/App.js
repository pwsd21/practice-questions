import React, { useState } from "react";
import DragandDrop from "./DragandDrop";
import "./style.css";

function DragApp() {
  const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const [items, setItems] = useState(initialItems);

  return (
    <div className="App">
      <h1>React Drag and Drop</h1>
      <DragandDrop items={items} setItems={setItems} />
    </div>
  );
}

export default DragApp;
