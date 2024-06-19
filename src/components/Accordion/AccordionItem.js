import React from "react";

// AccordionItem Component
const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div>
      {/* Accordion Header */}
      <div
        className="font-bold p-2 bg-slate-300 flex justify-between cursor-pointer"
        onClick={() => {
          // Toggle the open state of the accordion item
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        {/* Title of the Accordion */}
        <span>{title}</span>
        {/* Downward arrow icon */}
        <span>🔽</span>
      </div>

      {/* Accordion Body - Only rendered if isOpen is true */}
      {isOpen && <div>{body}</div>}
    </div>
  );
};

export default AccordionItem;
