import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "what is react?",
    content: "it is a frontend library",
  },
  {
    title: "why use react?",
    content: "it is good library",
  },
  {
    title: "how use react?",
    content: "learn html css js and then jsx",
  },
];

const options = [
  {
    label: "the color Red",
    value: "red",
  },
  {
    label: "the color Green",
    value: "green",
  },
  {
    label: "the color Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  console.log("app re rendered");
  return (
    <div>
      {/* <div>
        <Accordion items={items} />
      </div> */}
      {/* <div>
        <Search />
      </div> */}

      <div>
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </div>
    </div>
  );
};
