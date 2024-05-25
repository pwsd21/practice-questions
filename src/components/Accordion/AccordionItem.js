const AccordionItem = ({ title, body, isOpen, setIsOpen }) => {
  return (
    <div>
      <div
        className="font-bold p-2 bg-slate-300 flex justify-between cursor-pointer"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      >
        <span>{title}</span>
        <span>🔽</span>
      </div>
      {isOpen && <div>{body}</div>}
    </div>
  );
};
export default AccordionItem;
