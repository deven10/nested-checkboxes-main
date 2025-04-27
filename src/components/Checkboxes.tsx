import { Checkbox } from "./Checkbox";

export const Checkboxes = ({ data, checked, setChecked }) => {
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
