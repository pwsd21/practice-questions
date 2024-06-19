import React, { useState } from "react";
import DragandDrop from "./DragandDrop"; // Importing the DragandDrop component
import "./style.css"; // Importing the CSS file for styling

function DragApp() {
  // Initial array of items
  const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

  // State to manage the items array, initialized with initialItems
  const [items, setItems] = useState(initialItems);

  return (
    <div className="App">
      {" "}
      {/* Container div with App class */}
      <h1>React Drag and Drop</h1> {/* Heading for the application */}
      {/* Rendering the DragandDrop component and passing items and setItems as props */}
      <DragandDrop items={items} setItems={setItems} />
    </div>
  );
}

export default DragApp;
