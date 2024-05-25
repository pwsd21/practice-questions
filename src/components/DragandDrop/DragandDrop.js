import React from "react";

function DragandDrop({ items, setItems }) {
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("dragItem", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow a drop
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData("dragItem");
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(dragIndex, 1);
    updatedItems.splice(dropIndex, 0, draggedItem);
    setItems(updatedItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            marginBottom: "4px",
            cursor: "grab",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DragandDrop;
