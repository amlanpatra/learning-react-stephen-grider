import React, { useState, useEffect } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      console.log("clicked");
      setOpen(false);
    });
  }, []);

  const renderedOptions = options.map((option) => {
    if (selected.label == option.label) {
      // null in react means don't render anything
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.value}
      </div>
    );
  });

  console.log("dropdown re rendered");
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => setOpen(!open)}
          // changing className to show and hide the dropdown on click
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          {console.log("clicked down")}
          <div className="text">{selected.label}</div>
          <i className="dropdown icon"></i>
          {/* changing className to show and hide the dropdown on click */}
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
