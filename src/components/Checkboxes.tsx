// import { useState } from "react";
import { Checkbox } from "./Checkbox";

export const Checkboxes = ({ data, checked, setChecked }) => {
  // const [checked, setChecked] = useState({ 1: true, 2: true });
  return (
    <div className="main">
      {data.map((item) => (
        <Checkbox
          key={item.id}
          item={item}
          checked={checked}
          setChecked={setChecked}
          // data={data}
        />
      ))}
    </div>
  );
};
