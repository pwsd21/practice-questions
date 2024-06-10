import React, { useState, useMemo } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const items = ["Apple", "Banana", "Cherry"];

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, items]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
