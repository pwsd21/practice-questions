import React from "react";

function DragandDrop({ items, setItems }) {
  // Function to set drag data when drag starts
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("dragItem", index); // Set data for drag operation
  };

  // Function to handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default to allow drop
  };

  // Function to handle drop event
  const handleDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData("dragItem"); // Get dragged item index
    const updatedItems = [...items]; // Copy items array
    const [draggedItem] = updatedItems.splice(dragIndex, 1); // Remove dragged item from array
    updatedItems.splice(dropIndex, 0, draggedItem); // Insert dragged item at drop index
    setItems(updatedItems); // Update state with new items order
  };

  return (
    <ul>
      {/* Map through items array to render list items */}
      {items.map((item, index) => (
        <li
          key={index}
          draggable // Enable draggable attribute
          onDragStart={(e) => handleDragStart(e, index)} // Handle drag start event
          onDragOver={handleDragOver} // Handle drag over event
          onDrop={(e) => handleDrop(e, index)} // Handle drop event
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            marginBottom: "4px",
            cursor: "grab",
          }}
        >
          {item} {/* Display item content */}
        </li>
      ))}
    </ul>
  );
}

export default DragandDrop;
