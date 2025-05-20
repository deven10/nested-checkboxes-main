import { DataType } from "../types";
import { Checkbox } from "./Checkbox";

export const Checkboxes = ({
  data,
  checked,
  setChecked,
}: {
  data: DataType[];
  checked: Record<number, boolean>;
  setChecked: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
}) => {
  return (
    <div className="main">
      {data.map((item: DataType) => (
        <Checkbox
          key={item.id}
          item={item}
          checked={checked}
          setChecked={setChecked}
        />
      ))}
    </div>
  );
};
