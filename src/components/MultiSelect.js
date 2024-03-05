import React, { useState } from "react";

const MultiSelect = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const itemList = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    // Add more items as needed
  ];

  const handleSelection = (item) => {
    if (selectedItems.includes(item)) {
      // If the item is already selected, remove it
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      // If the item is not selected, add it
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div>
      <h2>Multi-Select Example</h2>
      <ul>
        {/* Assume itemList is an array of items */}
        {itemList.map((item) => (
          <li
            key={item.id}
            onClick={() => handleSelection(item)}
            style={{
              cursor: "pointer",
              color: selectedItems.includes(item) ? "blue" : "black",
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>

      <p>Selected Items: {selectedItems.join(", ")}</p>
    </div>
  );
};

export default MultiSelect;
